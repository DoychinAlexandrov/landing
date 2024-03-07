import Link from "next/link";

type FooterItemProps = {
  items: Array<{
    label: string;
    link?: string;
    children?: Array<{
      label: string;
      link?: string;
    }>;
  }>;
};

function FooterItem({ items }: FooterItemProps) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <h3 className="text-lg font-bold">{item.label}</h3>

          <ul className="text-lg">
            {item.children &&
              item.children.map((childItem, childIndex) => (
                <li key={childIndex} className="line">
                  <Link href={childItem.link ?? ""}>{childItem.label}</Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FooterItem;
