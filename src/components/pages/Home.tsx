import Templates from '../templates';
import Organisms from '../organisms';

export default function Home() {
  return (
    <Templates.Nested>
      <Organisms.Main />
    </Templates.Nested>
  );
}
