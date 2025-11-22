export const metadata = {
  title: 'Lagos Talk - November 2025 | Advient Advisors',
  description: 'Presentation from Lagos, November 2025',
}

export default function LagosTask() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    }}>
      <iframe
        src="https://lagos-talk.vercel.app/"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding: 0
        }}
        title="Lagos Talk Presentation"
      />
    </div>
  )
}
