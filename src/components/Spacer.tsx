interface Ispacer {
    height: number | undefined,
    width: number | undefined
}

export default function Spacer(
    height?: Ispacer,
    width?: Ispacer) {
    return (
        <div style={{height: height?.height, width: width?.width}}>
        </div>
    )
}
