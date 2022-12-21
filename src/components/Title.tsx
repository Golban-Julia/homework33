type TitleProps = {
    name: string;
    type: string;
};

const Title = ({ name, type } : TitleProps) => {
    return (
        <h1 style={{ fontWeight: type === "bold" ? "bold" : "normal" }}>
            {name}
        </h1>
   );
};


export default Title;

