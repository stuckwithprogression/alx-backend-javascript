/**
 * createInt8TypedArray - function that returns a new ArrayBuffer with an Int8
 *                        value at a specific position
 *
 * @length: the length of the array buffer to create
 * @position: the position of the int8 value
 * @value: the value of the int8
 *
 * Return: return a new array buffer
*/

export default function createInt8TypedArray(length, position, value) {
  if (position > length) {
    throw Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);

  return view;
}
