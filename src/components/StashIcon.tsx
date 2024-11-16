import bushStashIcon from '../images/icons/STASH_unit_(bush).png';
import crateStashIcon from '../images/icons/STASH_unit_(crate).png';
import holeStashIcon from '../images/icons/STASH_unit_(hole).png';
import rockStashIcon from '../images/icons/STASH_unit_(rock).png';


const stashIcons: { [x: string]: string } = {
    Bush: bushStashIcon,
    Crate: crateStashIcon,
    Hole: holeStashIcon,
    Rock: rockStashIcon,
};

const StashIcon: React.FC<{
    type: string;
}> = ({ type }) => {
    return (
        <img
            src={stashIcons[type]}
            alt={type}
            aria-hidden
            width={33}
            height={29}
        />
    );
};

export default StashIcon;
