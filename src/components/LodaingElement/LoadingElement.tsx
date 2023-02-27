import ContentLoader from 'react-content-loader';

const ImageGrid = (props: JSX.IntrinsicAttributes) => (
    <ContentLoader
        width={1120}
        height={800}
        viewBox="0 0 800 575"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
    <rect x="4" y="58" rx="2" ry="2" width="256" height="210" />
    <rect x="280" y="57" rx="2" ry="2" width="256" height="210" />
    <rect x="556" y="56" rx="2" ry="2" width="256" height="210" />

    <rect x="4" y="288" rx="2" ry="2" width="230" height="25" />
    <rect x="280" y="288" rx="2" ry="2" width="230" height="25" />
    <rect x="556" y="288" rx="2" ry="2" width="230" height="25" />

    <rect x="4" y="328" rx="2" ry="2" width="230" height="15" />
    <rect x="280" y="328" rx="2" ry="2" width="230" height="15" />
    <rect x="556" y="328" rx="2" ry="2" width="230" height="15" />

    <rect x="4" y="353" rx="2" ry="2" width="32" height="25" />
    <rect x="280" y="353" rx="2" ry="2" width="32" height="25" />
    <rect x="556" y="353" rx="2" ry="2" width="32" height="25" />


    </ContentLoader>
)

export default ImageGrid