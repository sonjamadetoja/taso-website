const Footer = () => {
  const d = new Date(); 
  return (
    <footer  className="bg-primary text-light px-6 py-4 text-sm">
      <div className="flex flex-col justify-between items-center gap-4">
        <div>© {d.getUTCFullYear()} Taso Research. All rights reserved.</div>
        <div className="flex items-center gap-2">
          <span>Seuraa meitä:</span> 
          <a href="https://www.linkedin.com/company/taso-research/" target="_blank" rel="noopener noreferrer">
            <img src="/LI-In-Bug.png" alt="LinkedIn" width="24" height="24" className="inline-block"/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer