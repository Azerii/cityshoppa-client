import styled from 'styled-components';

const ProductCard = styled.a`
  display: block;
  width: 100%;

  &:visited {
    color: inherit;
  }

  .inner {
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    width: 100%;
    height: 15rem;
    // box-shadow: 0px 0px 5px #e5e5e5;
    // border: 1px solid #e5e5e5;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: transform ease-out 200ms;

    &:hover {
      transform: scale(1.1);

      .cardText {
        background-color: #ff7235;

        .productName,
        .prompt,
        .buyNow {
          color: #ffffff !important;
        }

        .buyNow {
          img {
            &.arrow_active {
              display: inline !important;
            }
            &.arrow {
              display: none;
            }
          }
        }
      }
    }

    .trendingBadge {
      position: absolute;
      top: 0.5rem;
      left: 1rem;
      height: 2rem;
    }

    .cardImageWrapper {
      height: 60%;
      border-bottom: none;
      border-radius: 0.3rem;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      overflow: hidden;
      baclkground-color: #f9f9f9;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .cardText {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 50%;
      background-color: #f5f5f5;
      padding: 1rem 2rem;
      border-radius: 0.3rem;
      border-top-left-radius: 0;
      border-top-right-radius: 0;

      @media screen and (max-width: 768px) {
        padding: 1rem;
      }

      .productName {
        font-size: 110%;
        font-weight: 500;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 0.5rem;

        .prompt {
          font-size: 50%;
          text-transform: uppercase;
          // display: none;
        }

        .buyNow {
          display: flex;
          align-items: center;
          font-size: 60%;
          font-weight: 500;
          color: #ff7235;

          img {
            height: 0.5rem;
            margin-left: 0.5rem;

            &.arrow_active {
              display: none;
            }
          }
        }
      }

      .caption {
        font-size: 50%;
        text-transform: uppercase;
        color: #000000;
      }
    }
  }

  .discountBadge {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -1rem;
    right: -1rem;
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 50%;
    // background-color: #ff7235;
    background-color: #c54100;
    color: #ffffff;

    .text {
      line-height: 10px;
    }

    .percentage {
      font-weight: 700;
      font-size: 80%;
    }

    .small {
      font-weight: 400;
      font-size: 50%;
      text-transform: uppercase;
    }
  }
`;

export default ProductCard;
