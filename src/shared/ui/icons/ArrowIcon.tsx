interface ArrowIconProps {
size?: number;
fill?: string;
className?: string;
}

export const ArrowIcon = ({size = 14, fill = "#fff", className}: ArrowIconProps) => {
    return (
        <svg 
            width={size} 
            height={size} 
            className={className} 
            viewBox="0 0 8 14" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M2.82808 7.00001L7.77808 11.95L6.36408 13.364L7.57376e-05 7.00001L6.36408 0.636013L7.77808 2.05001L2.82808 7.00001Z" 
                fill={fill}
            />
        </svg>
    );
};