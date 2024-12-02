type ButtonProps = {
    label: string;
    onClick?: () => void;
};

const Button = ({ label, onClick, ...props }: ButtonProps) => {
    return (
        <button
            className="bg-blue-500 text-white p-4 hover:bg-red-500 rounded-md lg:hover:underline"
            onClick={onClick}
            {...props}
        >
            {label}
        </button>
    );
};

export default Button;