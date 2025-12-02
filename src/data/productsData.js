// Product catalog data for Mumtaj Fish Nets

export const products = [
    {
        id: 'monofilament',
        name: 'Monofilament Fishnet',
        shortDescription: 'High-quality synthetic nets offering low visibility and maximum strength',
        description: 'Premium monofilament fishing nets engineered for superior performance in both shallow and deep sea operations. These nets feature low visibility underwater, minimal water resistance, and exceptional durability.',
        price: '₹870/Kg',
        priceNote: 'Price subject to current raw material costs. Request quote for bulk orders.',
        featured: true,
        image: '/images/monofilament-net.jpg',
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
            colors: ['White', 'Blue', 'Green'],
            meshSizes: '10mm to 50mm',
            twineSize: '0.4mm to 2.0mm',
            treatment: 'UV Stabilized, Anti-Rot',
            customization: 'Available in various depths and lengths'
        },
        delivery: 'Available across Tamil Nadu and Kerala. Bulk orders shipped nationwide.'
    },
    {
        id: 'nylon',
        name: 'Nylon Multi Filament Fishing Net',
        shortDescription: 'Robust, heavy-duty nets with superior knot stability and high breaking strength',
        description: 'Heavy-duty nylon multi-filament nets designed for challenging marine conditions. Known for exceptional knot stability, high breaking strength, and durability. Perfect for larger catches and demanding fishing operations.',
        price: 'Contact for Quote',
        priceNote: 'Pricing varies based on specifications. Contact us for detailed quotation.',
        featured: true,
        image: '/images/nylon-net.jpg',
        features: [
            'Superior knot stability',
            'High breaking strength',
            'UV resistant treatment',
            'Anti-rot properties',
            'Excellent abrasion resistance',
            'Long-lasting durability'
        ],
        applications: [
            'Large catch operations',
            'Deep sea fishing',
            'Trawling',
            'Seine netting',
            'Commercial fishing'
        ],
        specifications: {
            material: 'Premium Nylon Multi-filament',
            denierRange: '210/2 to 210/6',
            meshSizes: '10mm to 50mm',
            colors: ['White', 'Blue', 'Green', 'Custom'],
            treatment: 'UV Stabilized, Anti-Rot Enhanced',
            customization: 'Available in various colors, twine sizes, and depths'
        },
        delivery: 'Available across Tamil Nadu and Kerala. Bulk orders shipped nationwide.'
    },
    {
        id: 'fishing-line',
        name: 'Fishing Line',
        shortDescription: 'Premium monofilament and braided lines with high tensile strength',
        description: 'Professional-grade fishing lines available in both monofilament and braided multi-filament options. Engineered for high tensile strength, superior abrasion resistance, and consistent performance.',
        price: 'Contact for Quote',
        priceNote: 'Pricing varies based on type and quantity. Contact us for detailed quotation.',
        featured: true,
        image: '/images/fishing-line.jpg',
        features: [
            'High tensile strength',
            'Superior abrasion resistance',
            'Consistent diameter',
            'Low memory (monofilament)',
            'Zero stretch (braided)',
            'UV resistant'
        ],
        applications: [
            'Sport fishing',
            'Commercial fishing',
            'Long-line fishing',
            'Hand-line fishing',
            'All water conditions'
        ],
        specifications: {
            types: [
                {
                    name: 'Monofilament',
                    features: ['High abrasion resistance', 'Low visibility', 'Good knot strength']
                },
                {
                    name: 'Multi-filament (Braided)',
                    features: ['Zero stretch', 'High breaking strain', 'Thin diameter']
                }
            ],
            diameter: '0.4mm to 2.0mm',
            tensileStrength: '10 lbs to 150 lbs',
            packaging: 'Standard spools (500m, 1000m) and bulk coils',
            colors: ['Clear', 'Blue', 'Green', 'Custom']
        },
        delivery: 'Available across Tamil Nadu and Kerala. Bulk orders shipped nationwide.'
    },
    {
        id: 'general-nets',
        name: 'Fishing Nets (General)',
        shortDescription: 'Standard-grade nets and custom solutions for all fishing needs',
        description: 'Comprehensive range of standard-grade fishing nets covering all common fishing applications. We also offer custom net manufacturing services tailored to your specific requirements.',
        price: 'Contact for Quote',
        priceNote: 'Pricing varies based on type and specifications. Contact us for detailed quotation.',
        featured: false,
        image: '/images/general-nets.jpg',
        features: [
            'Multiple net types available',
            'Custom manufacturing',
            'Quality materials',
            'Competitive pricing',
            'Fast turnaround',
            'Expert consultation'
        ],
        applications: [
            'Throw nets',
            'Gill nets',
            'Seine nets',
            'Cast nets',
            'Custom applications'
        ],
        specifications: {
            types: ['Throw Nets', 'Gill Nets', 'Seine Nets', 'Cast Nets', 'Custom Nets'],
            materials: 'Monofilament and Nylon Multi-filament',
            customization: 'Full customization available - mesh size, depth, length, color',
            consultation: 'Free expert consultation for custom requirements'
        },
        delivery: 'Available across Tamil Nadu and Kerala. Bulk orders shipped nationwide.'
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
