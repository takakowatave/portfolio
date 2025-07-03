type Props = {
    type: "h2" | "h3"; 
};


export const Tag = ({type}: Props) => {
    const base = "px-2 py-1 text-sm font-bold rounded border";
    const styles = {
        h2: "text-green-600 border-green-600",
        h3: "text-orange-600 border-orange-600",
        };
        const labels = {
        h2: "関連語",
        h3: "対義語",
        };

        return (
        <span data-testid={`tag-${type}`} className={`${base} ${styles[type]}`}>
            {labels[type]}
        </span>

    );
}

export default Tag;