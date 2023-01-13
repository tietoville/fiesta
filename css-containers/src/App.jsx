import './App.css';
import Card from './Card';

const doggos = [
  'Most angery pupper I have ever seen blop long woofer blop pupper long doggo woofer adorable doggo, very taste wow tungg fluffer such treat the neighborhood pupper',
  'Adorable doggo long bois most angery pupper I have ever seen you are doin me a concern woofer, fat boi super chub shibe.',
  'Vvv shooberino long bois he made many woofs floofs the neighborhood pupper blep, heckin angery woofer very taste wow h*ck I am bekom fat.',
  'Fluffer wow such tempt heck long doggo mlem porgo, extremely cuuuuuute much ruin diet you are doin me a concern.',
]

const App = () => {
  return (
    <main>
      <h1>Cards</h1>
      <div className="content">
        <div className="hero">
          <Card heading="A card" description={doggos[0]} />
        </div>
        <div className="main">
          <Card heading="A card" description={doggos[1]} />
        </div>
        <div className="sidebar">
          <Card heading="A card" description={doggos[2]} />
        </div>
        <div className="carousel">
          <Card heading="A card" description={doggos[3]} />
        </div>
      </div>
    </main>
  );
};

export default App;
