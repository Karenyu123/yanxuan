import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { Swiper, SwiperItem, Image } from '@tarojs/components';

const MySwiper = Taro.memo(function MySwiper(props) {
  const { swiperList } = props;
  return <Swiper>
    {swiperList.map((item, index) => {
      return <SwiperItem>
            <Image src="" />
          </SwiperItem>;
    })}
  </Swiper>;
});
MySwiper.defaultProps = {
  swiperList: []
};

export default MySwiper;