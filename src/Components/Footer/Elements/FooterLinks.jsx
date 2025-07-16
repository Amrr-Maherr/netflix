const linkColumns = [
  ["FAQ", "Help Center", "Account", "Media Center"],
  ["Investor Relations", "Jobs", "Ways to Watch", "Terms of Use"],
  ["Privacy", "Cookie Preferences", "Corporate Information", "Contact Us"],
  ["Speed Test", "Legal Notices", "Only on Netflix"],
];

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center md:text-left">
      {linkColumns.map((col, index) => (
        <ul key={index} className="space-y-2">
          {col.map((text) => (
            <li key={text}>
              <a href="#" className="hover:underline">
                {text}
              </a>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
