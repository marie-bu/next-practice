type Props = {
    tag: string
}

export default function Tag({ tag }: Props): JSX.Element | null {
    return (
        <li className="tag tag-label"><span className="sr-only">tag</span>#{tag}</li>
    )
}