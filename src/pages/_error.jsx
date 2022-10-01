export default function Error({ statusCode }) {
	return <p>{statusCode ? `Ошибка ${statusCode} - исходит от сервера` : 'Ошибка - исходит от клиента'}</p>
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404

	return { statusCode }
}
