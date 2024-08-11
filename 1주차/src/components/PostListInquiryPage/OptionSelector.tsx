import styled from "styled-components";
import Colors from "../../design-system/colors/Colors";
import LatestImg from "../../assets/latest.svg";
import OldOrder from "../../assets/oldOlder.svg";
import fonts from "../../design-system/fonts/fonts";
import OptionList from "../../assets/OptionList.svg";

export const OptionSelector = () => {
  return (
    <>
      <OrderListFake>
        <SelectImg src={OptionList} alt="옵션 선택 이미지" />
        <OrderList name="order" id="order" defaultValue="Latest">
          <ListOption value="Latest" title={LatestImg}>
            최신순
          </ListOption>
          <ListOption value="old order" title={OldOrder}>
            오래된순
          </ListOption>
        </OrderList>
      </OrderListFake>
    </>
  );
};

const SelectImg = styled.img`
  position: absolute;
  z-index: 1;
  top: 14px;
  left: 20px;
`;

const OrderListFake = styled.div`
  width: 140px;
  height: 54px;
  position: relative;
`;

const ListOption = styled.option`
  width: 140px;
  height: 30px;
  border: 1px solid ${Colors.Gray3};
  background: ${Colors.Gray1};
  font-size: ${fonts.Body2};
`;

const OrderList = styled.select`
  position: relative;
  font-size: 20px;
  text-align-last: right;
  text-align: right;
  -ms-text-align-last: right;
  -moz-text-align-last: right;
  padding: 0 25px;

  width: 140px;
  height: 54px;
  border-radius: 4px;
  border: 1px solid ${Colors.Gray3};
  background: ${Colors.Gray1};
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  &::-ms-expand {
    display: none;
  }

  background-image: url("../assets/OptionList.svg");
  background-repeat: no-repeat;
  background-position: calc(100% - 10px) center;
`;
