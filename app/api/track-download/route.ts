import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, publicationId } = await request.json();

    if (!email || !publicationId) {
      return NextResponse.json(
        { error: 'Missing email or publication ID' },
        { status: 400 }
      );
    }

    const apiKey = process.env.BUTTONDOWN_API_KEY;

    if (!apiKey) {
      console.error('BUTTONDOWN_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    // Get the subscriber's current data
    const getResponse = await fetch(
      `https://api.buttondown.email/v1/subscribers?email=${encodeURIComponent(email)}`,
      {
        headers: {
          Authorization: `Token ${apiKey}`,
        },
      }
    );

    const getData = await getResponse.json();

    if (!getResponse.ok || !getData.results?.length) {
      console.error('Subscriber not found:', email);
      return NextResponse.json({ success: false }, { status: 404 });
    }

    const subscriber = getData.results[0];
    const existingTags: string[] = subscriber.tags || [];
    const downloadTag = `downloaded:${publicationId}`;

    // Skip if already tagged
    if (existingTags.includes(downloadTag)) {
      return NextResponse.json({ success: true, alreadyTracked: true });
    }

    // Update subscriber with the new download tag
    const updateResponse = await fetch(
      `https://api.buttondown.email/v1/subscribers/${subscriber.id}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Token ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tags: [...existingTags, downloadTag],
        }),
      }
    );

    if (!updateResponse.ok) {
      const errorData = await updateResponse.json();
      console.error('Failed to update subscriber tags:', errorData);
      return NextResponse.json(
        { error: 'Failed to track download' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Track download error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
