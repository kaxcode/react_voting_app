class ProductList extends React.Component {
	render() {
		return (
			<div className="ui unstackale items">
				Hello, friends! I'm a basic component
			</div>
		)
	}
}

ReactDOM.render(
	<ProductList />,
	document.getElementById('content')
);