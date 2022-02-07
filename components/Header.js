import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyle = css`
  background-color: #f9f1cc;
  margin: 10px 10px;
  border-radius: 5px;
  font-size: 20px;
  padding: 20px 40px;
  justify-content: center;
`;

const headerContent = css`
  justify-content: flex-end;
  display: flex;
  gap: 40px;
`;

const logoStyle = css`
  margin: 0;
  fill: none;
  display: flex;
  padding: 0;
  align-items: center;
`;

export default function Header() {
  return (
    <header css={headerStyle}>
      {/* <img
        css={logoStyle}
        src="/yarn-icon-20.png"
        width="50px"
        height="50px"
        alt="yarn logo"
      /> */}
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
