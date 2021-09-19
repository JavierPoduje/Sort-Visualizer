import './canvas.scss';

const BARS = [2, 4, 3, 5, 7, 6, 8, 2, 9, 10];

const Canvas: React.FC = () => {
  return (
    <section className="canvas">
      <section className="bars">
        {BARS.map((barHeight, idx) => (
          <figure
            key={idx}
            className="bar"
            style={{ height: barHeight * 50 }}
          ></figure>
        ))}
      </section>
    </section>
  );
};

export default Canvas;
