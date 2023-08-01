import {Metadata} from "next";


type Props = {
    params: { name: string }
}

export function generateMetadata({ params }: Props): Metadata {
    return {
        title: `${params.name} | | Crowd Place`,
        description: `${params.name} | | Crowd Place`
    }
}

const Platform = ({params}: Props) => {

  return (
    <div className={'container'}>
        Platform: {params.name}
    </div>
  );
};

export default Platform;
