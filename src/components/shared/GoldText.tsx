export default function GoldText({
  children,
  as: Tag = "span",
  className = "",
}: {
  children: React.ReactNode;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
}) {
  return (
    <Tag className={`text-gold-gradient ${className}`}>{children}</Tag>
  );
}
