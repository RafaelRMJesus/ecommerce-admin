
interface HeaadingsProps {
  title: string;
  subtitle: string;
}

export const Heading: React.FC<HeaadingsProps> = ({
  title,
  subtitle
}) => {
  return (
    <div>
      <h2
        className="text-3xl font-bold tracking-tight"
      >
        {title}
      </h2>
      <p
        className="text-sm text-muted-foreground"
      >
        {subtitle}
      </p>
    </div>
  );
}
