// Task B05
// Extract, reformat and prepare the user’s test message data (illustrated below)
// into a suitable, ‘optimised’ (i.e., minimal fields used) single SQL ‘INSERT’ instruction
// that results in the insertion and correct relationship of each of the specified messages to
// their owner ensuring you also appropriately set the message’s initial archive state (where outlined in the test data).  

const insertMessages = `
INSERT INTO Messages (userid,message,archive)
VALUES
((SELECT userid 
  FROM Users 
  WHERE friendlyname = 'Abraham Lincoln'), 
  'Always bear in mind that your own resolution to success is more important than any other one thing.',0),
((SELECT userid 
  FROM Users 
  WHERE friendlyname = 'Socrates'), 'An unexamined life is not worth living.',0),
((SELECT userid 
  FROM Users 
  WHERE friendlyname = 'Kamala Harris'),'Anyone who claims to be a leader must speak like a leader. That means speaking with integrity and truth.',0),
((SELECT userid 
  FROM Users 
  WHERE friendlyname = 'Mark Twain'),'Don''t go around saying the world owes you a living. The world owes you nothing. It was here first.',1),
((SELECT userid 
  FROM Users 
  WHERE friendlyname = 'Benjamin Franklin'),'Don''t throw stones at your neighbours, if your own windows are glass.',0),
((SELECT userid 
  FROM Users 
  WHERE friendlyname = 'Aristotle'),'First, have a definite, clear practical ideal, a goal, an objective. Second, have the necessary means to achieve your ends, wisdom, money, materials, and methods. Third, adjust all your means to that end.',0),
((SELECT userid 
  FROM Users 
  WHERE friendlyname = 'Steve Jobs'),'Getting fired from Apple was the best thing that could have ever happened to me. The heaviness of being successful was replaced by the lightness of being a beginner again. It freed me to enter one of the most creative periods of my life.',0),
((SELECT userid 
  FROM Users 
  WHERE friendlyname = 'Anne Frank'),'How wonderful it is that nobody needs to wait a single moment before starting to improve the world.',0),
((SELECT userid 
  FROM Users 
  WHERE friendlyname = 'Alexei Navalny'),'I am not afraid.',0),
((SELECT userid 
  FROM Users 
  WHERE friendlyname = 'Thomas Jefferson'),'I find that the harder I work, the more luck I seem to have.',0),
((SELECT userid 
  FROM Users 
  WHERE friendlyname = 'Oprah Winfrey'),'If you look at what you have in life, you''ll always have more. If you look at what you don''t have in life, you''ll never have enough.',0),
((SELECT userid 
  FROM Users 
  WHERE friendlyname = 'Steve Jobs'),'If you really look closely, most overnight successes took a long time.',0),
((SELECT userid 
  FROM Users 
  WHERE friendlyname = 'Confucius'),'It does not matter how slowly you go as long as you do not stop.',0),
((SELECT userid 
  FROM Users 
  WHERE friendlyname = 'Thomas A. Edison'),'Many of life''s failures are people who did not realise how close they were to success when they gave up.',0),
((SELECT userid 
  FROM Users 
  WHERE friendlyname = 'Eleanor Roosevelt'),'No one can make you feel inferior without your consent.',0),
((SELECT userid 
  FROM Users 
  WHERE friendlyname = 'Franklin D. Roosevelt'),'The only limit to our realisation of tomorrow will be our doubts of today.',0),
((SELECT userid 
  FROM Users 
  WHERE friendlyname = 'Mark Twain'),'Twenty years from now you will be more disappointed by the things that you didn''t do than by the ones you did do. So, throw off the bowlines, sail away from safe harbours, catch the trade winds in your sails. Explore, Dream, Discover.',0),
((SELECT userid 
  FROM Users 
  WHERE friendlyname = 'Oprah Winfrey'),'You know you are on the road to success if you would do your job and not be paid for it.',0);
`
module.exports = { insertMessages };