export default function CopyrightFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="app-container">
        <div className="surface-border flex justify-content-between flex-wrap gap-2">
          <div className="opacity-80">&copy; NiBo {year}.</div>
          <div className="opacity-80">All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

