# Assertions

.assertEqual(a, b)          |       	a == b
.assertTrue(x)	            |           bool(x) is True
.assertFalse(x)             |           bool(x) is False
.assertIs(a, b)             |           a is b
.assertIsNone(x)            |           x is None
.assertIn(a, b)             |           a in b
.assertIsInstance(a, b)     |           isinstance(a, b)
.assertGreater(a, b)        |           >
.assertGreaterEqual(a, b)   |           >=
.assertLess(a, b)           |           <
.assertLessEqual(a, b)      |           <=

.assertIs(), .assertIsNone(), .assertIn(), and .assertIsInstance() all have opposite methods, named .assertIsNot(), and so forth.

python -m unittest discover
