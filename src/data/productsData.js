// Product catalog data for Mumtaj Fish Nets

export const products = [
    {
        id: 'monofilament',
        name: 'Monofilament Fishnet',
        shortDescription: 'High-quality synthetic nets offering low visibility and maximum strength',
        description: 'Premium monofilament fishing nets engineered for superior performance in both shallow and deep sea operations. These nets feature low visibility underwater, minimal water resistance, and exceptional durability.',
        featured: true,
        image: '/src/assets/images/product-1.jpg',
        features: [
            'Low visibility underwater',
            'Maximum tensile strength',
            'Minimal water resistance',
            'UV resistant treatment',
            'Anti-rot properties',
            'Precision knotting'
        ],
        applications: [
            'Gill netting',
            'Small to medium fish species',
            'Sardines and Mackerel',
            'Shallow and deep sea operations'
        ],
        specifications: {
            material: 'Premium Monofilament Nylon',
            colors: ['All Customizable'],
            meshSizes: '10mm to 50mm',
            twineSize: '0.4mm to 2.0mm',
            treatment: 'UV Stabilized, Anti-Rot',
            customization: 'Available in various depths and lengths'
        },
        delivery: 'Across India'
    }
];

export const getFeaturedProducts = () => {
    return products.filter(product => product.featured);
};

export const getProductById = (id) => {
    return products.find(product => product.id === id);
};

export const getAllProducts = () => {
    return products;
};
