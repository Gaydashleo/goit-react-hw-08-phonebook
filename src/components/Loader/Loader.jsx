import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {LoaderWrap} from './Loader.styled';

export default function LoaderComponent() {
  return (
    <LoaderWrap>
      <Loader type="ThreeDots" color="" height="35" />
    </LoaderWrap>
  );
}

