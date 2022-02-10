import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyle = css`
  margin: 10px 10px;
  border-radius: 5px;
  font-size: 22px;
  padding: 20px 40px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  background-color: #a8a7bb;
`;

const headerContent = css`
  justify-content: center;
  display: flex;
  gap: 80px;
  align-items: center;

  a {
    color: #a8a7bb;
    text-decoration: none;
    text-align: center;
    padding: 20px;
  }
  border-bottom: solid 3px #a8a7bb;
  margin: 10px;
`;

const logoStyle = css`
  display: flex;

  cursor: pointer;
`;

export default function Header() {
  return (
    <header>
      <div css={headerStyle}>
        {' '}
        <Link href="/">
          <img
            css={logoStyle}
            src="/yarn-icon-20.png"
            width="40px"
            height="40px"
            alt="yarn logo"
          />
        </Link>{' '}
        yarn start
      </div>

      <div css={headerContent}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/products">
          <a data-test-id="products-link"> Products</a>
        </Link>
        <Link href="/cart">
          <a>Cart</a>
        </Link>
      </div>
    </header>
  );
}
