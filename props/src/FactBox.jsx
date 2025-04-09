import PropTypes from 'prop-types';

function FactBox({ title, category, children }) {
  const categoryColor = {
    Science: '#dff0d8',
    Food: '#fff3cd',
    Animals: '#d1ecf1',
  }

  const bgColor = categoryColor[category] || '#f0f0f0'

  return (
    <div className="fact-box" style={{ backgroundColor: bgColor }}>
      <h2>{title}</h2>
      <span className="category">{category}</span>
      <p>{children}</p>
    </div>
  );

}

FactBox.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  children: PropTypes.node,
}

FactBox.defaultProps = {
  title: 'Unknown Fact',
  category: 'General',
  children: 'This is a default fact.',
}

export default FactBox
