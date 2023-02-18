import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

const Favorite = ({favorite}) => {

  return (
    <>
      {favorite ? <AiFillStar /> : <AiOutlineStar />}
    </>
  )
}

export default Favorite