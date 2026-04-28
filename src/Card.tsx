interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div className="card">
      <div className="card-content">{children}</div>
    </div>
  );
};
export default Card;
