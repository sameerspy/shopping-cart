import { Button, ButtonGroup, Card } from 'react-bootstrap';
import formatCurrency from '../utilities/formatCurrency';
import useShoppingCart from '../hooks/useShoppingCart';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className='h-100'>
      <Card.Img
        variant='top'
        src={imgUrl}
        height='200px'
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
          <span className='fs-2'>{name}</span>
          <span className='ms-2 text-muted '>{formatCurrency(price)}</span>
        </Card.Title>
        <div className='d-flex mt-auto justify-content-center '>
          {quantity === 0 ? (
            <Button className='w-50' onClick={() => increaseQuantity(id)}>
              + Add to Cart
            </Button>
          ) : (
            <div
              className='d-flex align-items-center flex-column'
              style={{ gap: '0.5rem' }}
            >
              <div
                className='d-flex align-items-center justify-content-center'
                style={{ gap: '0.5rem' }}
              >
                <ButtonGroup className='h-75'>
                  <Button onClick={() => decreaseQuantity(id)}>-</Button>
                  <Button disabled className='d-flex align-items-center '>
                    <span className='fs-2 me-2'>{quantity}</span> in cart
                  </Button>
                  <Button onClick={() => increaseQuantity(id)}>+</Button>
                </ButtonGroup>
              </div>
              <Button
                size='sm'
                variant='danger'
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
