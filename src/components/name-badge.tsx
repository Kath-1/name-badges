type NameBadgeProps = {
  greeting?: string; // string or undefined
  name: string;
};

const NameBadge = ({ name, greeting }: NameBadgeProps) => {
  return (
    <section className="badge">
      <header className="badge-header">
        <h1 className="text-5xl">{greeting}</h1>
        <p>My name is {name}</p>
      </header>
      <div className="badge-body">
        <p className="badge-name">Steve</p>
      </div>
      <footer className="badge-footer" />
    </section>
  );
};

export default NameBadge;
