export default function Card({ icon, title, description, className = '' }) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {icon && (
        <div className="text-4xl mb-4">
          {typeof icon === 'string' ? icon : icon}
        </div>
      )}
      {title && (
        <h3 className="text-xl font-semibold mb-2 text-gray-900">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
