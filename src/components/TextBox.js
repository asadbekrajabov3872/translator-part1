const TextBox = ({ style }) => {
    return (
        <div>
            <textarea 
                placeholder={style == 'input'? 'Enter text' : 'Translation'}
            />
        </div>
    )
}

export default TextBox