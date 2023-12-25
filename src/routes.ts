import express, { Request, Response } from 'express';

const router = express.Router();

// Initial data
let products = [
  { id: 1, item: 'Mobile' },
  { id: 2, item: 'Laptop' },
];

// Routes
router.get('/api/products', (req: Request, res: Response) => {
  res.json(products);
});

router.get('/api/products/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

router.post('/api/products', (req: Request, res: Response) => {
  const newUser = req.body;
  products.push(newUser);
  res.status(201).json(newUser);
});

router.put('/api/products/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  const updatedProduct = req.body;

    products = products.map((product) => (product.id === productId ? { ...product, ...updatedProduct } : product));

  res.json({ message: 'Product updated successfully' });
});

router.delete('/api/products/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  products = products.filter((product) => product.id !== productId);

  res.json({ message: 'Product deleted successfully' });
});

export default router;
