import { Link } from '../routes';

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Link route="/">
            <a style={linkStyle}>Homepage </a>
        </Link>

        <Link route="about">
            <a style={linkStyle}>About</a>
        </Link>

        <Link route="article" params={{ slug: "article-1" }}>
            <a style={linkStyle}>Article 1</a>
        </Link>

        <Link route="article" params={{ slug: "article-2" }}>
            <a style={linkStyle}>Article 2</a>
        </Link>
    </div>
);

export default Header;
