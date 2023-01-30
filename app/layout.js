import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="retro">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {children}
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </body>
    </html>
  )
}
