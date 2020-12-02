import styled from "styled-components";

export const HomeWrap = styled.div`
  position: relative;
  margin-bottom: 20px;

  .loadingArea {
    position: absolute;
    top: 0px;
    z-index: 9;
    width: 100%;
    height: 887px;
    opacity: .9;
    box-shadow: 0px 0px 200px 200px #ccc;
    background-color: #ccc
  }

  .loadingIcon {
    position: fixed;
    top: 50%;
    transform: translateX(-50%);
    transform: translateX(-50%);
    left: 50%;
    z-index: 77
  }

  .chinaMapTitle {
    color: #f8b500;
    font-size: 24px;
    font-weight: 800;
    margin: 20px 20px 0 20px;
    display: inline-block
  }

  .border {
    margin: 30px 0;
    border: 1px solid #eee;

    .desc {
      color: #aaa;
      text-align: center;
      margin: 37px 0 10px 0;
      transform: scale(.77, .77)

    }
  }

  span {
    font-size: 15px;

    em {
      font-style: normal
    }
  }

  .shadow {
    position: relative;
    margin-top: -70px;
    height: 87px;
    width: 100%;
    background-image: url(//assets.dxycdn.com/gitrepo/ncov-mobile/dist/static/bg-write@2x.ceaac07a.png);
    background-size: 100% 100%;
  }
`