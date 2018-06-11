const restaurantData = [
  { name: 'Death Eater\'s Deadly Prophecy of Revenge' },
  { name: 'The Deadly Dark Mark of Azkaban' },
  { name: 'Dark Wizard\'s Dark Cruciatus Curse of the Dark Arts' },
  { name: 'Tom Riddle\'s Deadly Prophecy that Shall not be Named' },
  { name: 'The Deadly Cruciatus Curse of Revenge' },
  { name: 'Lord Voldemort\'s Deadly Philosopher\'s Stone of the Pure Blood' },
  { name: 'Tom\'s Unforgiveable Dark Mark that Shall not be Named' },
  { name: 'Riddle\'s Unforgiveable Elder Wand of Azkaban' },
  { name: 'Deathly Unforgiveable Elder Wand that Shall not be Named' },
  { name: 'Deathly Deadly Philosopher\'s Stone that Shall not be Named' },
  { name: 'Dementor\'s Dark Killing Curse of the Dark Lord' },
  { name: 'Slytherin Dark Imperius Curse of the Pure Blood' },
  { name: 'Deathly Dark Prophecy of the Dark Lord' },
  { name: 'Dark Wizard\'s Deadly Horcrux of Azkaban' },
  { name: 'Riddle\'s Deathly Killing Curse of the Dark Lord' },
  { name: 'The Unforgiveable Cruciatus Curse of Azkaban' },
  { name: 'Dark Wizard\'s Deathly Horcrux of Revenge' },
  { name: 'The Deathly Dark Mark of the Pure Blood' },
  { name: 'Tom Riddle\'s Dark Horcrux of Azkaban' },
  { name: 'Death Eater\'s Deathly Elder Wand that Shall not be Named' },
  { name: 'Death Eater\'s Unforgiveable Dark Mark of the Pure Blood' },
  { name: 'Dark Wizard\'s Deathly Prophecy of Revenge' },
  { name: 'Slytherin Unforgiveable Prophecy of the Pure Blood' },
  { name: 'Dementor\'s Dark Prophecy of Azkaban' },
  { name: 'Tom Riddle\'s Unforgiveable Prophecy of the Dark Lord' },
  { name: 'Deathly Dark Imperius Curse of the Dark Arts' },
  { name: 'Riddle\'s Deadly Killing Curse of Revenge' },
  { name: 'Deathly Unforgiveable Horcrux of Azkaban' },
  { name: 'Tom\'s Dark Horcrux of the Dark Arts' },
  { name: 'Dark Wizard\'s Deathly Killing Curse of the Dark Arts' },
  { name: 'Deathly Dark Cruciatus Curse of the Pure Blood' },
  { name: 'Tom\'s Unforgiveable Elder Wand of the Pure Blood' },
  { name: 'Dark Wizard\'s Dark Philosopher\'s Stone of the Dark Lord' },
  { name: 'Death Eater\'s Unforgiveable Curse of Revenge' },
  { name: 'Slytherin Unforgiveable Curse of the Dark Arts' },
  { name: 'Tom Riddle\'s Unforgiveable Prophecy of Revenge' },
  { name: 'Lord Voldemort\'s Dark Horcrux of the Pure Blood' },
  { name: 'The Deadly Prophecy of the Dark Lord' },
  { name: 'Dementor\'s Unforgiveable Prophecy of Azkaban' },
  { name: 'Lord Voldemort\'s Unforgiveable Dark Mark that Shall not be Named' },
  { name: 'Dementor\'s Unforgiveable Elder Wand of Revenge' },
  { name: 'Deathly Deadly Cruciatus Curse of the Dark Lord' },
  { name: 'Deathly Dark Imperius Curse of the Dark Lord' },
  { name: 'Tom Riddle\'s Unforgiveable Imperius Curse of Azkaban' },
  { name: 'Dark Wizard\'s Unforgiveable Imperius Curse of Revenge' },
  { name: 'Tom\'s Dark Killing Curse of the Dark Lord' },
  { name: 'Dark Wizard\'s Deathly Cruciatus Curse of Revenge' },
  { name: 'Dementor\'s Dark Philosopher\'s Stone of the Pure Blood' },
  { name: 'Riddle\'s Unforgiveable Imperius Curse of the Dark Lord' },
  { name: 'Lord Voldemort\'s Unforgiveable Philosopher\'s Stone of the Dark Arts' },
  { name: 'Tom\'s Dark Elder Wand of Azkaban' },
  { name: 'Dementor\'s Dark Killing Curse of the Pure Blood' },
  { name: 'The Deadly Curse that Shall not be Named' },
  { name: 'The Unforgiveable Horcrux of the Dark Arts' },
  { name: 'Dementor\'s Unforgiveable Killing Curse that Shall not be Named' },
  { name: 'Death Eater\'s Deadly Cruciatus Curse of Revenge' },
  { name: 'Lord Voldemort\'s Deathly Imperius Curse of the Dark Lord' },
  { name: 'Dark Wizard\'s Dark Cruciatus Curse of the Dark Arts' },
  { name: 'Tom\'s Unforgiveable Horcrux of Azkaban' },
  { name: 'Slytherin Dark Elder Wand of Revenge' },
  { name: 'Deathly Deathly Philosopher\'s Stone that Shall not be Named' },
  { name: 'Death Eater\'s Deadly Killing Curse of the Pure Blood' },
  { name: 'Dementor\'s Dark Killing Curse of the Pure Blood' },
  { name: 'Death Eater\'s Deathly Dark Mark of the Dark Arts' },
  { name: 'Dementor\'s Dark Cruciatus Curse of the Dark Lord' },
  { name: 'Deathly Unforgiveable Curse that Shall not be Named' },
  { name: 'Dark Wizard\'s Dark Dark Mark of the Dark Arts' },
  { name: 'Dark Wizard\'s Unforgiveable Elder Wand of the Pure Blood' },
  { name: 'Dementor\'s Deathly Dark Mark of the Dark Lord' },
  { name: 'Riddle\'s Deathly Dark Mark of Revenge' },
  { name: 'Deathly Dark Imperius Curse of the Dark Lord' },
  { name: 'Tom\'s Deathly Imperius Curse of the Dark Arts' },
  { name: 'Dark Wizard\'s Unforgiveable Imperius Curse of the Dark Lord' },
  { name: 'Dementor\'s Deadly Cruciatus Curse of Azkaban' },
  { name: 'Dementor\'s Deathly Philosopher\'s Stone of the Dark Arts' },
  { name: 'Tom Riddle\'s Deadly Philosopher\'s Stone of the Pure Blood' },
  { name: 'Deathly Unforgiveable Dark Mark of the Dark Arts' },
  { name: 'Death Eater\'s Unforgiveable Dark Mark of the Dark Lord' },
  { name: 'Riddle\'s Deathly Killing Curse that Shall not be Named' },
  { name: 'Tom Riddle\'s Deathly Prophecy that Shall not be Named' },
  { name: 'Deathly Deathly Cruciatus Curse that Shall not be Named' },
  { name: 'Tom Riddle\'s Unforgiveable Elder Wand of the Dark Arts' },
  { name: 'Slytherin Deadly Imperius Curse of the Dark Lord' },
  { name: 'Lord Voldemort\'s Dark Prophecy of the Dark Lord' },
  { name: 'Lord Voldemort\'s Deathly Prophecy of Revenge' },
  { name: 'Riddle\'s Dark Prophecy of the Dark Arts' },
  { name: 'Death Eater\'s Dark Cruciatus Curse of Azkaban' },
  { name: 'Lord Voldemort\'s Unforgiveable Cruciatus Curse of the Pure Blood' },
  { name: 'Slytherin Dark Prophecy of the Dark Lord' },
  { name: 'The Deadly Prophecy of the Dark Lord' },
  { name: 'Deathly Deadly Curse of Azkaban' },
  { name: 'Tom Riddle\'s Unforgiveable Horcrux of Revenge' },
  { name: 'Tom Riddle\'s Deathly Imperius Curse of the Dark Lord' },
  { name: 'Death Eater\'s Unforgiveable Horcrux of the Pure Blood' },
  { name: 'Tom Riddle\'s Deadly Philosopher\'s Stone of the Dark Arts' },
  { name: 'Dark Wizard\'s Dark Elder Wand of the Dark Lord' },
  { name: 'Deathly Dark Dark Mark of the Dark Arts' },
  { name: 'Dementor\'s Deathly Killing Curse of the Dark Lord' },
  { name: 'Deathly Unforgiveable Curse of Azkaban' },
  { name: 'Dementor\'s Deathly Curse that Shall not be Named' }
];

const hoursData = [
  {rid: 1, Mon: '11:00 am - 10:00 pm', Tue: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm', Wed: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm', Thu: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm', Fri: '11:00 am - 10:00 pm', Sat: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm', Sun: '11:00 am - 10:00 pm' }, 
  {rid: 2, Mon: '11:00 am - 4:00 pm\n5:00 pm - 11:00 pm', Tue: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm', Wed: '11:00 am - 3:00 pm\n6:00 pm - 9:00 pm', Thu: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm', Fri: '11:00 am - 6:00 pm\n9:00 pm - 12:00 am', Sat: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm', Sun: '11:00 am - 3:00 pm\n6:00 pm - 11:00 pm' }, 
  {rid: 3, Mon: '11:00 am - 10:00 pm', Tue: '11:00 am - 2:00 pm', Wed: '11:00 am - 10:00 pm', Thu: '11:00 am - 2:00 pm', Fri: '11:00 am - 10:00 pm', Sat: '11:00 am - 2:00 pm', Sun: '11:00 am - 10:00 pm' }, 
  {rid: 4, Mon: '5:08 am - 12:57 pm\n7:55 pm - 8:36 pm', Tue: '9:07 am - 9:20 pm', Wed: '7:03 am - 10:37 pm', Thu: '10:03 am - 12:21 am', Fri: '10:30 am - 12:18 am', Sat: '5:41 am - 3:08 pm\n4:30 pm - 7:16 pm', Sun: '10:06 am - 11:46 pm' },
  {rid: 5, Mon: '9:25 am - 12:55 am', Tue: '6:58 am - 12:20 am', Wed: '6:09 am - 2:14 pm\n4:28 pm - 12:33 am', Thu: '10:57 am - 3:06 pm\n7:12 pm - 8:52 pm', Fri: '10:25 am - 5:58 pm\n8:31 pm - 10:04 pm', Sat: '11:24 am - 12:21 pm\n5:53 pm - 11:26 pm', Sun: '11:44 am - 12:38 am' },
  {rid: 6, Mon: '6:45 am - 5:24 pm\n6:56 pm - 12:03 am', Tue: '10:34 am - 1:11 pm\n7:26 pm - 12:49 am', Wed: '12:05 pm - 11:26 pm', Thu: '11:45 am - 4:25 pm\n6:46 pm - 10:04 pm', Fri: '6:27 am - 5:16 pm\n8:41 pm - 10:23 pm', Sat: '9:52 am - 7:01 pm', Sun: '5:56 am - 3:31 pm\n8:48 pm - 11:41 pm' },
  {rid: 7, Mon: '7:32 am - 2:37 pm\n7:01 pm - 7:11 pm', Tue: '5:41 am - 2:48 pm\n6:36 pm - 9:25 pm', Wed: '7:41 am - 1:32 pm\n5:18 pm - 7:28 pm', Thu: '7:24 am - 5:02 pm\n5:38 pm - 7:08 pm', Fri: '11:17 am - 7:13 pm', Sat: '8:00 am - 10:37 pm', Sun: '12:42 pm - 12:16 pm\n8:58 pm - 10:12 pm' },
  {rid: 8, Mon: '7:46 am - 12:41 am', Tue: '5:13 am - 9:16 pm', Wed: '6:26 am - 3:13 pm\n8:32 pm - 8:32 pm', Thu: '6:36 am - 12:36 pm\n7:55 pm - 8:34 pm', Fri: '11:52 am - 7:55 pm', Sat: '10:57 am - 9:02 pm', Sun: '8:04 am - 10:17 pm' },
  {rid: 9, Mon: '12:13 pm - 9:07 pm', Tue: '8:28 am - 12:32 pm\n5:39 pm - 12:17 am', Wed: '11:39 am - 12:35 am', Thu: '11:00 am - 7:53 pm', Fri: '11:19 am - 4:04 pm\n4:04 pm - 8:33 pm', Sat: '11:42 am - 7:16 pm', Sun: '6:09 am - 3:31 pm\n7:42 pm - 11:16 pm' },
  {rid: 10, Mon: '8:10 am - 12:10 pm\n6:27 pm - 7:51 pm', Tue: '12:01 pm - 4:04 pm\n4:56 pm - 12:25 am', Wed: '10:27 am - 12:25 am', Thu: '8:25 am - 11:56 pm', Fri: '10:22 am - 10:44 pm', Sat: '11:18 am - 11:11 pm', Sun: '12:11 pm - 2:11 pm\n6:19 pm - 7:57 pm' },
  {rid: 11, Mon: '12:56 pm - 8:50 pm', Tue: '6:53 am - 10:37 pm', Wed: '9:28 am - 4:36 pm\n6:47 pm - 7:06 pm', Thu: '10:33 am - 5:20 pm\n4:04 pm - 8:59 pm', Fri: '8:37 am - 10:10 pm', Sat: '7:15 am - 4:03 pm\n6:21 pm - 12:50 am', Sun: '5:25 am - 5:14 pm\n6:44 pm - 7:55 pm' },
  {rid: 12, Mon: '9:39 am - 1:58 pm\n6:03 pm - 9:22 pm', Tue: '5:40 am - 8:13 pm', Wed: '6:47 am - 4:28 pm\n4:47 pm - 7:39 pm', Thu: '7:26 am - 7:58 pm', Fri: '9:52 am - 8:21 pm', Sat: '9:08 am - 5:13 pm\n6:35 pm - 9:54 pm', Sun: '11:35 am - 12:20 pm\n7:38 pm - 7:12 pm' },
  {rid: 13, Mon: '8:46 am - 4:48 pm\n8:25 pm - 9:04 pm', Tue: '7:04 am - 11:06 pm', Wed: '10:20 am - 11:15 pm', Thu: '12:06 pm - 8:31 pm', Fri: '5:52 am - 5:54 pm\n8:39 pm - 11:35 pm', Sat: '5:45 am - 4:49 pm\n6:30 pm - 12:34 am', Sun: '5:07 am - 4:15 pm\n6:14 pm - 7:08 pm' } ,
  {rid: 14, Mon: '6:44 am - 3:05 pm\n4:53 pm - 7:15 pm', Tue: '10:57 am - 5:05 pm\n8:08 pm - 11:52 pm', Wed: '12:17 pm - 2:19 pm\n5:39 pm - 12:55 am', Thu: '12:24 pm - 2:31 pm\n6:55 pm - 9:41 pm', Fri: '12:30 pm - 12:43 pm\n5:16 pm - 8:25 pm', Sat: '11:25 am - 3:42 pm\n7:30 pm - 11:17 pm', Sun: '12:16 pm - 9:14 pm' },
  {rid: 15, Mon: '9:59 am - 4:29 pm\n6:46 pm - 12:47 am', Tue: '11:32 am - 12:20 am', Wed: '10:00 am - 7:34 pm', Thu: '11:50 am - 10:56 pm', Fri: '12:34 pm - 3:59 pm\n5:30 pm - 12:55 am', Sat: '8:13 am - 12:54 am', Sun: '11:23 am - 12:31 pm\n4:01 pm - 8:16 pm' },
  {rid: 16, Mon: '7:30 am - 10:34 pm', Tue: '6:41 am - 7:08 pm', Wed: '6:46 am - 12:43 pm\n7:02 pm - 10:45 pm', Thu: '9:56 am - 9:02 pm', Fri: '12:41 pm - 5:15 pm\n8:04 pm - 7:47 pm', Sat: '11:54 am - 12:56 am', Sun: '11:03 am - 1:56 pm\n8:26 pm - 9:34 pm' },
  {rid: 17, Mon: '5:38 am - 7:57 pm', Tue: '11:55 am - 8:17 pm', Wed: '9:13 am - 10:26 pm', Thu: '5:26 am - 1:27 pm\n5:59 pm - 7:47 pm', Fri: '9:24 am - 4:11 pm\n8:29 pm - 8:24 pm', Sat: '11:05 am - 5:25 pm\n8:18 pm - 10:03 pm', Sun: '9:47 am - 8:33 pm' },
  {rid: 18, Mon: '9:06 am - 12:04 am', Tue: '6:56 am - 12:39 pm\n7:06 pm - 8:07 pm', Wed: '7:35 am - 12:07 am', Thu: '7:34 am - 5:17 pm\n6:47 pm - 11:28 pm', Fri: '11:06 am - 2:10 pm\n6:24 pm - 10:22 pm', Sat: '9:28 am - 4:00 pm\n8:41 pm - 11:12 pm', Sun: '8:20 am - 1:26 pm\n7:41 pm - 10:57 pm' },
  {rid: 19, Mon: '7:18 am - 12:21 am', Tue: '12:40 pm - 12:36 pm\n7:10 pm - 11:43 pm', Wed: '9:16 am - 11:40 pm', Thu: '12:19 pm - 8:43 pm', Fri: '12:01 pm - 7:08 pm', Sat: '10:08 am - 8:09 pm', Sun: '5:52 am - 1:28 pm\n7:00 pm - 8:48 pm' },
  {rid: 20, Mon: '5:12 am - 1:45 pm\n7:06 pm - 10:20 pm', Tue: '6:09 am - 12:11 am', Wed: '7:33 am - 10:04 pm', Thu: '8:50 am - 2:26 pm\n4:55 pm - 12:14 am', Fri: '5:19 am - 12:50 pm\n5:30 pm - 10:29 pm', Sat: '5:28 am - 4:38 pm\n7:33 pm - 10:00 pm', Sun: '12:38 pm - 11:09 pm' },
  {rid: 21, Mon: '5:13 am - 3:59 pm\n8:41 pm - 7:52 pm', Tue: '8:09 am - 2:24 pm\n5:08 pm - 12:23 am', Wed: '7:02 am - 10:14 pm', Thu: '11:10 am - 1:04 pm\n5:45 pm - 12:34 am', Fri: '10:33 am - 8:22 pm', Sat: '10:46 am - 8:18 pm', Sun: '10:08 am - 9:19 pm' },
  {rid: 22, Mon: '10:46 am - 5:31 pm\n8:02 pm - 8:38 pm', Tue: '8:22 am - 12:36 pm\n6:00 pm - 8:39 pm', Wed: '6:48 am - 10:08 pm', Thu: '10:48 am - 5:27 pm\n7:41 pm - 9:29 pm', Fri: '11:36 am - 3:04 pm\n8:11 pm - 10:53 pm', Sat: '5:30 am - 3:49 pm\n8:12 pm - 8:40 pm', Sun: '11:55 am - 9:02 pm' },
  {rid: 23, Mon: '11:19 am - 12:23 pm\n6:32 pm - 8:18 pm', Tue: '7:25 am - 8:37 pm', Wed: '8:06 am - 5:29 pm\n6:31 pm - 8:17 pm', Thu: '7:59 am - 2:43 pm\n6:02 pm - 12:18 am', Fri: '9:52 am - 5:21 pm\n6:41 pm - 12:14 am', Sat: '10:17 am - 7:27 pm', Sun: '11:19 am - 12:33 am' },
  {rid: 24, Mon: '12:31 pm - 3:08 pm\n5:05 pm - 12:30 am', Tue: '9:25 am - 10:12 pm', Wed: '9:17 am - 9:48 pm', Thu: '9:21 am - 4:18 pm\n5:47 pm - 12:11 am', Fri: '11:02 am - 8:22 pm', Sat: '10:56 am - 4:41 pm\n4:34 pm - 9:29 pm', Sun: '10:38 am - 11:05 pm' },
  {rid: 25, Mon: '8:53 am - 4:08 pm\n8:02 pm - 11:40 pm', Tue: '11:42 am - 9:47 pm', Wed: '10:56 am - 8:44 pm', Thu: '8:26 am - 10:17 pm', Fri: '5:35 am - 9:45 pm', Sat: '10:38 am - 10:05 pm', Sun: '5:30 am - 11:40 pm' },
  {rid: 26, Mon: '12:06 pm - 9:04 pm', Tue: '12:20 pm - 3:18 pm\n4:40 pm - 12:18 am', Wed: '6:14 am - 12:56 pm\n7:14 pm - 10:44 pm', Thu: '10:05 am - 7:37 pm', Fri: '12:41 pm - 2:42 pm\n5:50 pm - 11:06 pm', Sat: '11:23 am - 8:56 pm', Sun: '10:17 am - 10:49 pm' },
  {rid: 27, Mon: '8:59 am - 2:49 pm\n7:33 pm - 8:31 pm', Tue: '6:19 am - 7:19 pm', Wed: '8:19 am - 4:00 pm\n8:00 pm - 11:35 pm', Thu: '6:08 am - 3:40 pm\n4:17 pm - 11:52 pm', Fri: '6:08 am - 11:15 pm', Sat: '6:37 am - 10:18 pm', Sun: '11:01 am - 1:22 pm\n7:47 pm - 8:25 pm' },
  {rid: 28, Mon: '6:18 am - 9:06 pm', Tue: '9:03 am - 2:52 pm\n4:56 pm - 11:10 pm', Wed: '10:08 am - 1:57 pm\n6:46 pm - 11:38 pm', Thu: '6:51 am - 1:22 pm\n5:12 pm - 7:28 pm', Fri: '10:16 am - 9:35 pm', Sat: '9:10 am - 12:11 pm\n6:25 pm - 10:49 pm', Sun: '10:59 am - 4:59 pm\n7:54 pm - 8:25 pm' },
  {rid: 29, Mon: '11:43 am - 8:15 pm', Tue: '9:02 am - 1:47 pm\n8:35 pm - 8:59 pm', Wed: '8:48 am - 4:14 pm\n8:05 pm - 12:15 am', Thu: '11:28 am - 12:37 pm\n4:48 pm - 12:15 am', Fri: '12:23 pm - 9:35 pm', Sat: '11:13 am - 5:59 pm\n4:41 pm - 11:57 pm', Sun: '8:51 am - 5:28 pm\n5:53 pm - 12:03 am' },
  {rid: 30, Mon: '7:47 am - 12:50 am', Tue: '8:52 am - 11:16 pm', Wed: '5:20 am - 3:08 pm\n4:45 pm - 7:53 pm', Thu: '6:23 am - 2:57 pm\n8:52 pm - 11:26 pm', Fri: '9:10 am - 4:21 pm\n8:46 pm - 7:42 pm', Sat: '11:45 am - 3:48 pm\n8:48 pm - 9:13 pm', Sun: '5:17 am - 5:09 pm\n6:26 pm - 8:54 pm' },
  {rid: 31, Mon: '6:55 am - 11:50 pm', Tue: '12:55 pm - 1:52 pm\n5:37 pm - 7:56 pm', Wed: '8:59 am - 10:30 pm', Thu: '6:09 am - 7:05 pm', Fri: '7:34 am - 9:06 pm', Sat: '8:29 am - 7:33 pm', Sun: '6:43 am - 10:09 pm' },
  {rid: 32, Mon: '12:02 pm - 5:49 pm\n7:45 pm - 12:32 am', Tue: '6:55 am - 10:10 pm', Wed: '6:19 am - 5:47 pm\n8:25 pm - 9:10 pm', Thu: '8:20 am - 4:40 pm\n8:05 pm - 9:11 pm', Fri: '7:18 am - 8:14 pm', Sat: '6:12 am - 7:53 pm', Sun: '5:56 am - 4:03 pm\n5:35 pm - 11:17 pm' },
  {rid: 33, Mon: '11:58 am - 11:07 pm', Tue: '6:17 am - 5:31 pm\n7:04 pm - 9:16 pm', Wed: '9:09 am - 8:13 pm', Thu: '8:51 am - 5:02 pm\n8:05 pm - 11:43 pm', Fri: '9:08 am - 1:17 pm\n8:14 pm - 11:56 pm', Sat: '12:54 pm - 10:46 pm', Sun: '5:24 am - 1:56 pm\n7:50 pm - 7:56 pm' },
  {rid: 34, Mon: '9:39 am - 11:39 pm', Tue: '10:08 am - 11:25 pm', Wed: '11:46 am - 1:24 pm\n6:06 pm - 10:07 pm', Thu: '5:45 am - 9:46 pm', Fri: '10:24 am - 5:01 pm\n4:04 pm - 9:22 pm', Sat: '9:47 am - 4:20 pm\n4:01 pm - 10:21 pm', Sun: '11:39 am - 2:49 pm\n8:27 pm - 7:22 pm' },
  {rid: 35, Mon: '5:32 am - 9:47 pm', Tue: '6:14 am - 12:18 pm\n7:00 pm - 11:03 pm', Wed: '9:22 am - 8:25 pm', Thu: '10:54 am - 5:54 pm\n4:48 pm - 7:16 pm', Fri: '10:29 am - 10:21 pm', Sat: '10:09 am - 5:42 pm\n4:02 pm - 11:54 pm', Sun: '12:54 pm - 12:07 am' },
  {rid: 36, Mon: '8:48 am - 11:40 pm', Tue: '8:05 am - 3:53 pm\n4:35 pm - 7:43 pm', Wed: '9:26 am - 4:20 pm\n4:13 pm - 10:57 pm', Thu: '8:49 am - 3:24 pm\n8:15 pm - 7:59 pm', Fri: '6:25 am - 4:39 pm\n5:04 pm - 7:48 pm', Sat: '10:42 am - 10:17 pm', Sun: '12:54 pm - 11:30 pm' },
  {rid: 37, Mon: '12:26 pm - 11:11 pm', Tue: '9:29 am - 7:04 pm', Wed: '11:56 am - 1:47 pm\n8:50 pm - 10:27 pm', Thu: '5:50 am - 7:46 pm', Fri: '8:58 am - 12:11 am', Sat: '7:40 am - 3:15 pm\n4:24 pm - 8:36 pm', Sun: '7:07 am - 5:20 pm\n4:48 pm - 11:51 pm' },
  {rid: 38, Mon: '6:42 am - 2:56 pm\n7:20 pm - 12:41 am', Tue: '9:47 am - 12:36 am', Wed: '9:40 am - 3:15 pm\n5:21 pm - 10:57 pm', Thu: '6:53 am - 10:58 pm', Fri: '8:55 am - 8:35 pm', Sat: '12:21 pm - 2:57 pm\n6:39 pm - 12:01 am', Sun: '11:53 am - 11:41 pm' },
  {rid: 39, Mon: '10:50 am - 2:28 pm\n7:10 pm - 12:44 am', Tue: '5:58 am - 7:49 pm', Wed: '11:23 am - 7:57 pm', Thu: '9:49 am - 8:34 pm', Fri: '5:49 am - 7:20 pm', Sat: '12:39 pm - 1:11 pm\n6:49 pm - 11:12 pm', Sun: '11:36 am - 12:49 am' },
  {rid: 40, Mon: '8:12 am - 12:47 pm\n5:19 pm - 7:18 pm', Tue: '6:41 am - 4:20 pm\n4:45 pm - 9:25 pm', Wed: '12:11 pm - 7:38 pm', Thu: '5:06 am - 11:32 pm', Fri: '10:03 am - 8:25 pm', Sat: '9:23 am - 11:38 pm', Sun: '5:53 am - 10:00 pm' },
  {rid: 41, Mon: '12:59 pm - 4:48 pm\n4:58 pm - 12:26 am', Tue: '8:35 am - 2:59 pm\n7:42 pm - 8:18 pm', Wed: '10:50 am - 10:24 pm', Thu: '6:31 am - 9:16 pm', Fri: '9:44 am - 7:04 pm', Sat: '9:30 am - 5:12 pm\n5:22 pm - 9:41 pm', Sun: '7:04 am - 7:14 pm' },
  {rid: 42, Mon: '6:16 am - 1:59 pm\n7:39 pm - 7:44 pm', Tue: '10:28 am - 10:44 pm', Wed: '12:49 pm - 2:33 pm\n6:41 pm - 10:52 pm', Thu: '11:14 am - 3:42 pm\n8:52 pm - 7:58 pm', Fri: '12:49 pm - 10:52 pm', Sat: '11:04 am - 1:59 pm\n6:39 pm - 7:09 pm', Sun: '11:54 am - 5:45 pm\n7:53 pm - 12:46 am' },
  {rid: 43, Mon: '5:28 am - 1:48 pm\n6:47 pm - 11:16 pm', Tue: '7:25 am - 12:00 pm\n6:34 pm - 11:59 pm', Wed: '6:08 am - 4:34 pm\n7:35 pm - 7:11 pm', Thu: '6:36 am - 8:33 pm', Fri: '11:54 am - 7:56 pm', Sat: '10:54 am - 12:07 am', Sun: '6:50 am - 12:29 pm\n5:16 pm - 7:06 pm' },
  {rid: 44, Mon: '7:00 am - 12:34 pm\n6:25 pm - 12:39 am', Tue: '10:05 am - 4:39 pm\n5:02 pm - 10:00 pm', Wed: '8:37 am - 1:51 pm\n7:18 pm - 12:56 am', Thu: '11:00 am - 3:35 pm\n5:21 pm - 7:22 pm', Fri: '6:18 am - 9:42 pm', Sat: '12:31 pm - 4:14 pm\n8:32 pm - 10:57 pm', Sun: '10:26 am - 12:11 am' },
  {rid: 45, Mon: '9:11 am - 11:45 pm', Tue: '6:13 am - 10:18 pm', Wed: '5:00 am - 7:15 pm', Thu: '11:26 am - 9:06 pm', Fri: '12:49 pm - 1:27 pm\n8:45 pm - 7:56 pm', Sat: '12:50 pm - 12:45 pm\n5:27 pm - 10:06 pm', Sun: '7:20 am - 2:25 pm\n6:25 pm - 8:56 pm' },
  {rid: 46, Mon: '10:46 am - 10:34 pm', Tue: '10:24 am - 12:02 pm\n4:33 pm - 10:57 pm', Wed: '12:49 pm - 1:29 pm\n8:08 pm - 8:22 pm', Thu: '8:55 am - 8:56 pm', Fri: '6:16 am - 7:07 pm', Sat: '5:36 am - 3:44 pm\n7:10 pm - 12:09 am', Sun: '5:38 am - 9:56 pm' },
  {rid: 47, Mon: '6:35 am - 11:23 pm', Tue: '11:52 am - 11:48 pm', Wed: '6:20 am - 4:23 pm\n5:05 pm - 7:34 pm', Thu: '10:46 am - 12:04 pm\n7:14 pm - 12:27 am', Fri: '12:29 pm - 10:18 pm', Sat: '8:07 am - 4:58 pm\n8:43 pm - 11:29 pm', Sun: '10:10 am - 4:11 pm\n6:49 pm - 10:18 pm' },
  {rid: 48, Mon: '10:10 am - 4:24 pm\n8:00 pm - 9:15 pm', Tue: '8:37 am - 1:59 pm\n4:13 pm - 10:03 pm', Wed: '9:46 am - 7:23 pm', Thu: '5:26 am - 5:35 pm\n6:16 pm - 8:57 pm', Fri: '11:14 am - 11:29 pm', Sat: '12:23 pm - 1:09 pm\n6:00 pm - 12:44 am', Sun: '6:52 am - 2:03 pm\n4:41 pm - 8:28 pm' },
  {rid: 49, Mon: '6:31 am - 2:31 pm\n5:50 pm - 8:38 pm', Tue: '10:32 am - 3:12 pm\n8:45 pm - 7:30 pm', Wed: '6:44 am - 3:06 pm\n4:37 pm - 7:16 pm', Thu: '12:39 pm - 12:17 am', Fri: '5:27 am - 2:05 pm\n7:31 pm - 8:54 pm', Sat: '12:46 pm - 2:25 pm\n8:43 pm - 7:57 pm', Sun: '10:02 am - 2:41 pm\n6:18 pm - 11:05 pm' },
  {rid: 50, Mon: '12:02 pm - 1:46 pm\n8:49 pm - 9:13 pm', Tue: '7:48 am - 5:18 pm\n8:02 pm - 9:44 pm', Wed: '10:44 am - 9:29 pm', Thu: '12:02 pm - 12:05 pm\n8:17 pm - 11:46 pm', Fri: '10:47 am - 5:33 pm\n8:01 pm - 9:28 pm', Sat: '9:01 am - 10:45 pm', Sun: '9:59 am - 1:12 pm\n5:20 pm - 10:20 pm' },
  {rid: 51, Mon: '12:19 pm - 4:36 pm\n7:38 pm - 10:03 pm', Tue: '6:10 am - 8:26 pm', Wed: '8:24 am - 12:36 pm\n6:45 pm - 11:35 pm', Thu: '8:36 am - 8:22 pm', Fri: '6:00 am - 8:46 pm', Sat: '7:08 am - 3:10 pm\n5:02 pm - 7:35 pm', Sun: '11:33 am - 10:42 pm' },
  {rid: 52, Mon: '5:55 am - 12:37 am', Tue: '10:43 am - 10:35 pm', Wed: '9:48 am - 12:22 pm\n5:05 pm - 10:29 pm', Thu: '12:14 pm - 10:32 pm', Fri: '9:39 am - 4:03 pm\n8:29 pm - 8:39 pm', Sat: '9:03 am - 2:01 pm\n5:57 pm - 7:08 pm', Sun: '6:02 am - 4:19 pm\n5:21 pm - 9:36 pm' },
  {rid: 53, Mon: '7:06 am - 4:09 pm\n5:40 pm - 12:44 am', Tue: '11:12 am - 10:22 pm', Wed: '8:25 am - 4:05 pm\n4:13 pm - 8:38 pm', Thu: '9:45 am - 12:09 pm\n4:57 pm - 11:12 pm', Fri: '10:11 am - 12:42 am', Sat: '12:30 pm - 3:51 pm\n5:36 pm - 10:58 pm', Sun: '10:30 am - 12:06 am' },
  {rid: 54, Mon: '10:23 am - 9:11 pm', Tue: '10:25 am - 3:01 pm\n5:30 pm - 10:54 pm', Wed: '8:33 am - 1:03 pm\n6:42 pm - 9:36 pm', Thu: '9:06 am - 8:59 pm', Fri: '5:28 am - 2:27 pm\n5:17 pm - 8:28 pm', Sat: '8:38 am - 7:05 pm', Sun: '8:21 am - 10:46 pm' },
  {rid: 55, Mon: '8:06 am - 12:27 pm\n5:28 pm - 8:22 pm', Tue: '7:54 am - 7:23 pm', Wed: '6:21 am - 1:51 pm\n4:23 pm - 10:22 pm', Thu: '8:48 am - 2:55 pm\n6:03 pm - 7:52 pm', Fri: '9:53 am - 5:03 pm\n7:25 pm - 8:03 pm', Sat: '7:00 am - 9:54 pm', Sun: '5:49 am - 1:25 pm\n6:45 pm - 10:55 pm' },
  {rid: 56, Mon: '8:43 am - 3:08 pm\n7:07 pm - 9:24 pm', Tue: '7:07 am - 5:27 pm\n5:46 pm - 11:28 pm', Wed: '9:58 am - 4:47 pm\n4:01 pm - 8:20 pm', Thu: '10:33 am - 12:31 pm\n5:57 pm - 10:11 pm', Fri: '6:11 am - 7:32 pm', Sat: '9:13 am - 5:08 pm\n6:23 pm - 9:11 pm', Sun: '10:31 am - 9:26 pm' },
  {rid: 57, Mon: '11:10 am - 1:23 pm\n4:09 pm - 10:57 pm', Tue: '7:11 am - 10:41 pm', Wed: '9:21 am - 9:54 pm', Thu: '12:45 pm - 2:36 pm\n4:19 pm - 7:57 pm', Fri: '10:13 am - 12:39 pm\n5:22 pm - 12:44 am', Sat: '10:53 am - 4:17 pm\n7:42 pm - 10:58 pm', Sun: '12:45 pm - 12:29 am' },
  {rid: 58, Mon: '8:39 am - 12:31 pm\n7:25 pm - 8:03 pm', Tue: '5:14 am - 3:31 pm\n4:51 pm - 11:48 pm', Wed: '5:35 am - 12:07 pm\n5:35 pm - 12:02 am', Thu: '6:29 am - 7:04 pm', Fri: '11:15 am - 7:25 pm', Sat: '9:39 am - 7:20 pm', Sun: '11:46 am - 7:41 pm' },
  {rid: 59, Mon: '8:29 am - 5:20 pm\n6:25 pm - 9:29 pm', Tue: '11:26 am - 9:34 pm', Wed: '7:06 am - 1:34 pm\n8:02 pm - 10:08 pm', Thu: '8:20 am - 3:26 pm\n4:13 pm - 9:26 pm', Fri: '11:12 am - 8:49 pm', Sat: '10:22 am - 5:50 pm\n6:47 pm - 12:53 am', Sun: '9:39 am - 12:30 am' },
  {rid: 60, Mon: '5:40 am - 5:18 pm\n4:11 pm - 9:58 pm', Tue: '11:40 am - 3:38 pm\n5:16 pm - 7:20 pm', Wed: '12:07 pm - 4:20 pm\n6:10 pm - 9:57 pm', Thu: '11:30 am - 8:22 pm', Fri: '7:53 am - 3:52 pm\n6:37 pm - 8:47 pm', Sat: '7:12 am - 10:10 pm', Sun: '8:07 am - 4:03 pm\n5:48 pm - 10:40 pm' },
  {rid: 61, Mon: '12:34 pm - 3:22 pm\n4:42 pm - 12:18 am', Tue: '12:03 pm - 7:04 pm', Wed: '9:21 am - 7:09 pm', Thu: '6:06 am - 7:41 pm', Fri: '7:29 am - 8:05 pm', Sat: '8:23 am - 12:46 pm\n4:44 pm - 10:04 pm', Sun: '6:16 am - 1:23 pm\n4:20 pm - 7:40 pm' },
  {rid: 62, Mon: '5:34 am - 12:20 pm\n8:27 pm - 8:51 pm', Tue: '8:49 am - 9:27 pm', Wed: '7:45 am - 12:48 am', Thu: '7:37 am - 7:37 pm', Fri: '7:28 am - 4:53 pm\n4:18 pm - 12:47 am', Sat: '12:04 pm - 8:49 pm', Sun: '11:49 am - 4:13 pm\n5:37 pm - 8:43 pm' },
  {rid: 63, Mon: '7:35 am - 11:12 pm', Tue: '9:50 am - 9:41 pm', Wed: '12:09 pm - 10:42 pm', Thu: '8:09 am - 9:05 pm', Fri: '11:38 am - 5:04 pm\n7:28 pm - 12:42 am', Sat: '8:45 am - 11:01 pm', Sun: '7:49 am - 11:33 pm' },
  {rid: 64, Mon: '10:00 am - 11:42 pm', Tue: '10:28 am - 2:46 pm\n4:18 pm - 8:59 pm', Wed: '7:24 am - 1:10 pm\n6:21 pm - 8:47 pm', Thu: '6:50 am - 4:58 pm\n8:32 pm - 8:58 pm', Fri: '12:03 pm - 9:21 pm', Sat: '7:19 am - 5:21 pm\n6:45 pm - 8:10 pm', Sun: '5:29 am - 7:47 pm' },
  {rid: 65, Mon: '9:27 am - 4:19 pm\n4:39 pm - 10:10 pm', Tue: '5:19 am - 12:55 pm\n6:11 pm - 7:43 pm', Wed: '9:19 am - 1:32 pm\n5:44 pm - 10:51 pm', Thu: '7:58 am - 3:26 pm\n5:39 pm - 9:58 pm', Fri: '12:02 pm - 4:38 pm\n8:00 pm - 10:52 pm', Sat: '9:09 am - 5:47 pm\n8:58 pm - 10:45 pm', Sun: '7:34 am - 1:45 pm\n6:20 pm - 10:46 pm' },
  {rid: 66, Mon: '5:40 am - 7:55 pm', Tue: '10:49 am - 5:55 pm\n4:08 pm - 7:16 pm', Wed: '10:06 am - 12:18 am', Thu: '10:57 am - 3:07 pm\n8:14 pm - 7:25 pm', Fri: '11:53 am - 9:07 pm', Sat: '6:21 am - 3:56 pm\n8:05 pm - 11:56 pm', Sun: '9:58 am - 1:41 pm\n6:27 pm - 8:19 pm' },
  {rid: 67, Mon: '11:46 am - 5:08 pm\n4:02 pm - 9:37 pm', Tue: '9:34 am - 7:09 pm', Wed: '6:05 am - 9:15 pm', Thu: '9:45 am - 11:22 pm', Fri: '8:46 am - 1:21 pm\n5:21 pm - 7:06 pm', Sat: '11:02 am - 4:59 pm\n5:59 pm - 10:53 pm', Sun: '12:56 pm - 10:48 pm' },
  {rid: 68, Mon: '10:59 am - 9:47 pm', Tue: '9:18 am - 4:01 pm\n6:26 pm - 9:44 pm', Wed: '10:03 am - 10:43 pm', Thu: '8:15 am - 5:35 pm\n7:41 pm - 9:59 pm', Fri: '10:59 am - 5:35 pm\n7:57 pm - 12:22 am', Sat: '7:57 am - 2:06 pm\n8:52 pm - 10:59 pm', Sun: '12:07 pm - 12:41 am' },
  {rid: 69, Mon: '7:42 am - 8:43 pm', Tue: '10:51 am - 4:30 pm\n5:52 pm - 7:21 pm', Wed: '5:02 am - 4:45 pm\n8:54 pm - 9:20 pm', Thu: '9:44 am - 1:16 pm\n8:35 pm - 10:03 pm', Fri: '11:57 am - 5:40 pm\n6:41 pm - 10:10 pm', Sat: '6:11 am - 7:51 pm', Sun: '10:46 am - 1:18 pm\n4:49 pm - 12:20 am' },
  {rid: 70, Mon: '6:08 am - 12:49 pm\n6:34 pm - 8:34 pm', Tue: '7:41 am - 3:32 pm\n4:09 pm - 11:29 pm', Wed: '7:04 am - 10:47 pm', Thu: '7:37 am - 10:44 pm', Fri: '7:25 am - 12:59 pm\n5:15 pm - 7:03 pm', Sat: '12:44 pm - 9:55 pm', Sun: '7:44 am - 5:17 pm\n7:26 pm - 11:54 pm' },
  {rid: 71, Mon: '9:59 am - 7:15 pm', Tue: '9:22 am - 4:07 pm\n5:45 pm - 10:57 pm', Wed: '6:50 am - 3:44 pm\n4:26 pm - 12:14 am', Thu: '7:13 am - 12:04 pm\n7:52 pm - 8:08 pm', Fri: '5:55 am - 12:39 am', Sat: '8:40 am - 9:22 pm', Sun: '8:35 am - 12:58 pm\n6:00 pm - 12:38 am' },
  {rid: 72, Mon: '11:38 am - 2:22 pm\n6:26 pm - 9:58 pm', Tue: '12:41 pm - 12:48 am', Wed: '8:53 am - 1:48 pm\n8:43 pm - 11:15 pm', Thu: '9:00 am - 4:03 pm\n6:29 pm - 11:17 pm', Fri: '12:22 pm - 12:21 pm\n7:57 pm - 8:32 pm', Sat: '12:20 pm - 10:34 pm', Sun: '5:08 am - 12:16 am' },
  {rid: 73, Mon: '12:31 pm - 8:03 pm', Tue: '8:12 am - 9:22 pm', Wed: '5:49 am - 9:35 pm', Thu: '11:33 am - 4:56 pm\n7:40 pm - 7:51 pm', Fri: '8:07 am - 4:53 pm\n4:20 pm - 7:18 pm', Sat: '6:05 am - 2:43 pm\n4:34 pm - 9:11 pm', Sun: '8:34 am - 2:22 pm\n6:55 pm - 7:20 pm' },
  {rid: 74, Mon: '7:37 am - 4:37 pm\n6:02 pm - 11:34 pm', Tue: '12:59 pm - 1:08 pm\n7:26 pm - 11:27 pm', Wed: '12:28 pm - 8:15 pm', Thu: '11:54 am - 8:21 pm', Fri: '10:42 am - 12:51 pm\n8:23 pm - 10:59 pm', Sat: '9:32 am - 2:05 pm\n7:25 pm - 12:12 am', Sun: '6:03 am - 10:04 pm' },
  {rid: 75, Mon: '6:58 am - 7:31 pm', Tue: '6:02 am - 9:35 pm', Wed: '6:38 am - 12:54 am', Thu: '11:26 am - 11:58 pm', Fri: '7:32 am - 3:59 pm\n8:51 pm - 8:52 pm', Sat: '8:24 am - 8:09 pm', Sun: '6:03 am - 3:44 pm\n5:32 pm - 9:00 pm' },
  {rid: 76, Mon: '10:27 am - 3:42 pm\n6:43 pm - 11:13 pm', Tue: '5:38 am - 2:52 pm\n6:17 pm - 8:13 pm', Wed: '12:36 pm - 11:13 pm', Thu: '12:45 pm - 12:25 am', Fri: '5:37 am - 2:30 pm\n6:22 pm - 11:11 pm', Sat: '5:03 am - 1:27 pm\n5:08 pm - 11:20 pm', Sun: '7:05 am - 4:59 pm\n6:35 pm - 7:43 pm' },
  {rid: 77, Mon: '11:16 am - 4:52 pm\n8:44 pm - 12:05 am', Tue: '11:27 am - 12:43 pm\n8:51 pm - 11:52 pm', Wed: '6:21 am - 2:39 pm\n5:19 pm - 7:42 pm', Thu: '5:34 am - 4:34 pm\n7:55 pm - 10:03 pm', Fri: '6:32 am - 11:58 pm', Sat: '5:56 am - 1:28 pm\n5:24 pm - 7:56 pm', Sun: '11:34 am - 9:02 pm' },
  {rid: 78, Mon: '6:11 am - 10:26 pm', Tue: '5:09 am - 4:30 pm\n7:07 pm - 7:42 pm', Wed: '6:05 am - 5:31 pm\n6:01 pm - 12:27 am', Thu: '8:07 am - 10:45 pm', Fri: '9:13 am - 7:35 pm', Sat: '5:55 am - 1:26 pm\n8:18 pm - 12:49 am', Sun: '10:54 am - 11:14 pm' },
  {rid: 79, Mon: '11:37 am - 9:33 pm', Tue: '7:26 am - 4:27 pm\n7:55 pm - 10:34 pm', Wed: '6:23 am - 9:45 pm', Thu: '11:15 am - 11:57 pm', Fri: '7:25 am - 7:46 pm', Sat: '11:28 am - 7:03 pm', Sun: '12:10 pm - 7:10 pm' },
  {rid: 80, Mon: '6:50 am - 5:36 pm\n4:55 pm - 9:52 pm', Tue: '12:12 pm - 10:50 pm', Wed: '9:12 am - 4:08 pm\n6:34 pm - 11:32 pm', Thu: '6:21 am - 12:47 pm\n6:24 pm - 7:09 pm', Fri: '9:47 am - 12:20 pm\n4:20 pm - 12:07 am', Sat: '9:01 am - 10:42 pm', Sun: '7:04 am - 4:06 pm\n7:29 pm - 11:36 pm' },
  {rid: 81, Mon: '7:07 am - 2:12 pm\n4:18 pm - 12:01 am', Tue: '5:47 am - 2:39 pm\n6:42 pm - 7:38 pm', Wed: '9:31 am - 10:16 pm', Thu: '5:59 am - 9:18 pm', Fri: '11:02 am - 10:08 pm', Sat: '6:42 am - 4:43 pm\n5:12 pm - 10:03 pm', Sun: '8:51 am - 12:58 am' },
  {rid: 82, Mon: '9:41 am - 2:27 pm\n7:37 pm - 9:12 pm', Tue: '7:20 am - 11:36 pm', Wed: '5:27 am - 7:45 pm', Thu: '12:27 pm - 12:37 am', Fri: '12:10 pm - 7:13 pm', Sat: '7:59 am - 9:25 pm', Sun: '10:50 am - 3:42 pm\n5:25 pm - 11:27 pm' },
  {rid: 83, Mon: '8:16 am - 12:02 am', Tue: '8:22 am - 1:03 pm\n6:33 pm - 12:13 am', Wed: '12:36 pm - 4:27 pm\n5:26 pm - 10:18 pm', Thu: '11:05 am - 7:44 pm', Fri: '11:30 am - 3:35 pm\n4:41 pm - 7:55 pm', Sat: '11:38 am - 11:29 pm', Sun: '12:54 pm - 7:40 pm' },
  {rid: 84, Mon: '5:53 am - 1:24 pm\n6:46 pm - 11:59 pm', Tue: '7:28 am - 7:24 pm', Wed: '6:10 am - 3:46 pm\n8:58 pm - 11:18 pm', Thu: '12:44 pm - 5:06 pm\n6:00 pm - 8:50 pm', Fri: '12:21 pm - 12:47 pm\n8:36 pm - 10:09 pm', Sat: '5:05 am - 7:19 pm', Sun: '7:06 am - 5:37 pm\n4:59 pm - 10:26 pm' },
  {rid: 85, Mon: '11:22 am - 12:57 am', Tue: '12:31 pm - 5:26 pm\n8:27 pm - 8:50 pm', Wed: '6:55 am - 3:33 pm\n7:30 pm - 9:55 pm', Thu: '11:58 am - 8:58 pm', Fri: '8:19 am - 4:04 pm\n7:01 pm - 10:36 pm', Sat: '5:16 am - 2:22 pm\n6:02 pm - 10:33 pm', Sun: '9:11 am - 12:01 am' },
  {rid: 86, Mon: '9:16 am - 7:58 pm', Tue: '5:49 am - 12:43 am', Wed: '8:01 am - 9:44 pm', Thu: '11:15 am - 7:06 pm', Fri: '6:56 am - 7:47 pm', Sat: '12:37 pm - 4:01 pm\n8:17 pm - 10:05 pm', Sun: '10:59 am - 1:06 pm\n4:48 pm - 10:00 pm' },
  {rid: 87, Mon: '7:41 am - 3:56 pm\n8:59 pm - 12:02 am', Tue: '5:37 am - 12:40 pm\n6:44 pm - 7:45 pm', Wed: '10:05 am - 10:28 pm', Thu: '7:36 am - 9:04 pm', Fri: '6:44 am - 12:53 pm\n7:35 pm - 9:50 pm', Sat: '11:35 am - 5:54 pm\n7:52 pm - 10:50 pm', Sun: '7:44 am - 12:42 pm\n4:29 pm - 10:04 pm' },
  {rid: 88, Mon: '9:31 am - 10:22 pm', Tue: '12:24 pm - 11:49 pm', Wed: '7:49 am - 9:02 pm', Thu: '9:12 am - 8:40 pm', Fri: '7:11 am - 12:57 am', Sat: '7:52 am - 5:31 pm\n8:23 pm - 10:45 pm', Sun: '5:02 am - 10:08 pm' },
  {rid: 89, Mon: '9:04 am - 12:24 am', Tue: '7:29 am - 3:34 pm\n8:27 pm - 9:05 pm', Wed: '6:56 am - 3:46 pm\n4:47 pm - 11:26 pm', Thu: '12:59 pm - 11:49 pm', Fri: '12:27 pm - 8:58 pm', Sat: '12:44 pm - 7:17 pm', Sun: '11:10 am - 12:28 am' },
  {rid: 90, Mon: '10:14 am - 10:36 pm', Tue: '10:59 am - 8:58 pm', Wed: '12:17 pm - 5:30 pm\n4:18 pm - 8:15 pm', Thu: '5:03 am - 5:35 pm\n4:32 pm - 7:15 pm', Fri: '10:26 am - 3:50 pm\n4:28 pm - 7:03 pm', Sat: '7:57 am - 11:34 pm', Sun: '12:51 pm - 8:40 pm' },
  {rid: 91, Mon: '7:16 am - 10:41 pm', Tue: '7:33 am - 3:17 pm\n6:00 pm - 9:05 pm', Wed: '10:48 am - 11:41 pm', Thu: '12:40 pm - 12:46 am', Fri: '12:21 pm - 10:19 pm', Sat: '5:50 am - 12:21 pm\n8:34 pm - 11:18 pm', Sun: '7:49 am - 9:07 pm' },
  {rid: 92, Mon: '7:43 am - 7:37 pm', Tue: '12:00 pm - 5:20 pm\n5:22 pm - 7:00 pm', Wed: '9:11 am - 8:53 pm', Thu: '12:15 pm - 7:08 pm', Fri: '7:11 am - 12:08 pm\n5:30 pm - 9:07 pm', Sat: '6:03 am - 7:48 pm', Sun: '10:13 am - 12:02 am' },
  {rid: 93, Mon: '11:32 am - 2:53 pm\n8:59 pm - 12:38 am', Tue: '6:42 am - 9:42 pm', Wed: '7:47 am - 5:05 pm\n6:10 pm - 12:36 am', Thu: '10:32 am - 11:45 pm', Fri: '9:28 am - 11:20 pm', Sat: '11:19 am - 3:56 pm\n8:33 pm - 8:44 pm', Sun: '8:59 am - 7:08 pm' },
  {rid: 94, Mon: '5:38 am - 12:12 am', Tue: '8:03 am - 1:20 pm\n4:30 pm - 12:00 am', Wed: '11:45 am - 10:50 pm', Thu: '10:29 am - 1:04 pm\n8:23 pm - 7:39 pm', Fri: '7:45 am - 3:55 pm\n7:46 pm - 7:59 pm', Sat: '11:35 am - 12:45 am', Sun: '11:26 am - 1:05 pm\n4:45 pm - 12:34 am' },
  {rid: 95, Mon: '5:18 am - 2:56 pm\n8:51 pm - 12:19 am', Tue: '11:31 am - 9:51 pm', Wed: '8:36 am - 8:58 pm', Thu: '6:55 am - 5:49 pm\n7:38 pm - 12:41 am', Fri: '12:22 pm - 8:55 pm', Sat: '7:59 am - 7:09 pm', Sun: '11:14 am - 9:52 pm' },
  {rid: 96, Mon: '5:17 am - 8:33 pm', Tue: '10:49 am - 5:41 pm\n6:48 pm - 7:03 pm', Wed: '9:22 am - 12:30 am', Thu: '9:32 am - 12:00 pm\n4:40 pm - 10:25 pm', Fri: '11:39 am - 12:37 am', Sat: '9:02 am - 4:45 pm\n6:06 pm - 12:42 am', Sun: '8:53 am - 7:59 pm' },
  {rid: 97, Mon: '11:44 am - 2:55 pm\n4:06 pm - 8:57 pm', Tue: '5:01 am - 10:51 pm', Wed: '5:54 am - 10:07 pm', Thu: '8:22 am - 1:57 pm\n6:01 pm - 11:10 pm', Fri: '12:45 pm - 12:17 pm\n8:37 pm - 10:01 pm', Sat: '11:33 am - 12:51 pm\n8:02 pm - 7:51 pm', Sun: '11:31 am - 10:22 pm' },
  {rid: 98, Mon: '8:49 am - 4:29 pm\n8:13 pm - 7:42 pm', Tue: '11:04 am - 7:54 pm', Wed: '10:25 am - 11:59 pm', Thu: '5:38 am - 7:26 pm', Fri: '6:46 am - 3:29 pm\n7:34 pm - 8:58 pm', Sat: '8:58 am - 2:47 pm\n6:36 pm - 12:58 am', Sun: '10:11 am - 2:10 pm\n7:09 pm - 7:59 pm' } ,
  {rid: 99, Mon: '8:45 am - 8:43 pm', Tue: '5:27 am - 4:09 pm\n4:37 pm - 7:58 pm', Wed: '12:26 pm - 3:04 pm\n4:26 pm - 12:58 am', Thu: '10:25 am - 11:39 pm', Fri: '10:33 am - 1:29 pm\n8:27 pm - 9:14 pm', Sat: '9:10 am - 2:13 pm\n5:51 pm - 9:26 pm', Sun: '9:53 am - 1:30 pm\n6:24 pm - 11:07 pm' },
  {rid: 100, Mon: '6:47 am - 7:14 pm', Tue: '11:04 am - 9:14 pm', Wed: '9:44 am - 12:38 pm\n6:38 pm - 11:55 pm', Thu: '8:43 am - 4:05 pm\n4:00 pm - 12:48 am', Fri: '8:07 am - 12:32 am', Sat: '12:40 pm - 10:47 pm', Sun: '10:50 am - 3:53 pm\n7:56 pm - 7:59 pm' }
];

const detailsData = [
  { rid: 1, Today: '', Price_Range: '$30-40', Health_Score: 'C' }, 
  { rid: 2, Today: '', Price_Range: '$50-100', Health_Score: 'B' }, 
  { rid: 3, Today: '', Price_Range: '$57-72', Health_Score: 'D' }, 
  { rid: 4, Today: '', Price_Range: '$17-27', Health_Score: 'F' },
  { rid: 5, Today: '', Price_Range: '$27-38', Health_Score: 'D' }, 
  { rid: 6, Today: '', Price_Range: '$46-66', Health_Score: 'F' }, 
  { rid: 7, Today: '', Price_Range: '$5-9', Health_Score: 'D' }, 
  { rid: 8, Today: '', Price_Range: '$23-44', Health_Score: 'E' }, 
  { rid: 9, Today: '', Price_Range: '$31-59', Health_Score: 'A' }, 
  { rid: 10, Today: '', Price_Range: '$10-13', Health_Score: 'E' }, 
  { rid: 11, Today: '', Price_Range: '$36-48', Health_Score: 'D' }, 
  { rid: 12, Today: '', Price_Range: '$32-37', Health_Score: 'F' },
  { rid: 13, Today: '', Price_Range: '$46-81', Health_Score: 'E' }, 
  { rid: 14, Today: '', Price_Range: '$46-69', Health_Score: 'A' }, 
  { rid: 15, Today: '', Price_Range: '$49-77', Health_Score: 'B' }, 
  { rid: 16, Today: '', Price_Range: '$33-35', Health_Score: 'C' }, 
  { rid: 17, Today: '', Price_Range: '$36-56', Health_Score: 'A' }, 
  { rid: 18, Today: '', Price_Range: '$21-41', Health_Score: 'D' }, 
  { rid: 19, Today: '', Price_Range: '$37-41', Health_Score: 'E' },
  { rid: 20, Today: '', Price_Range: '$57-95', Health_Score: 'F' }, 
  { rid: 21, Today: '', Price_Range: '$15-20', Health_Score: 'C' }, 
  { rid: 22, Today: '', Price_Range: '$20-28', Health_Score: 'A' }, 
  { rid: 23, Today: '', Price_Range: '$21-26', Health_Score: 'C' }, 
  { rid: 24, Today: '', Price_Range: '$32-43', Health_Score: 'A' },
  { rid: 25, Today: '', Price_Range: '$9-13', Health_Score: 'A' },
  { rid: 26, Today: '', Price_Range: '$51-78', Health_Score: 'A' },
  { rid: 27, Today: '', Price_Range: '$2-3', Health_Score: 'F' },
  { rid: 28, Today: '', Price_Range: '$17-31', Health_Score: 'F' },
  { rid: 29, Today: '', Price_Range: '$2-2', Health_Score: 'B' },
  { rid: 30, Today: '', Price_Range: '$4-5', Health_Score: 'F' },
  { rid: 31, Today: '', Price_Range: '$52-60', Health_Score: 'C' },
  { rid: 32, Today: '', Price_Range: '$35-54', Health_Score: 'E' },
  { rid: 33, Today: '', Price_Range: '$9-17', Health_Score: 'A' },
  { rid: 34, Today: '', Price_Range: '$24-37', Health_Score: 'E' },
  { rid: 35, Today: '', Price_Range: '$11-11', Health_Score: 'A' },
  { rid: 36, Today: '', Price_Range: '$39-75', Health_Score: 'C' },
  { rid: 37, Today: '', Price_Range: '$6-11', Health_Score: 'F' },
  { rid: 38, Today: '', Price_Range: '$35-46', Health_Score: 'B' },
  { rid: 39, Today: '', Price_Range: '$50-74', Health_Score: 'C' },
  { rid: 40, Today: '', Price_Range: '$59-90', Health_Score: 'F' },
  { rid: 41, Today: '', Price_Range: '$7-9', Health_Score: 'A' },
  { rid: 42, Today: '', Price_Range: '$59-64', Health_Score: 'F' },
  { rid: 43, Today: '', Price_Range: '$55-61', Health_Score: 'A' },
  { rid: 44, Today: '', Price_Range: '$35-68', Health_Score: 'F' },
  { rid: 45, Today: '', Price_Range: '$47-63', Health_Score: 'D' },
  { rid: 46, Today: '', Price_Range: '$47-64', Health_Score: 'E' },
  { rid: 47, Today: '', Price_Range: '$3-5', Health_Score: 'C' },
  { rid: 48, Today: '', Price_Range: '$1-1', Health_Score: 'B' },
  { rid: 49, Today: '', Price_Range: '$33-53', Health_Score: 'F' },
  { rid: 50, Today: '', Price_Range: '$40-54', Health_Score: 'F' },
  { rid: 51, Today: '', Price_Range: '$20-27', Health_Score: 'A' },
  { rid: 52, Today: '', Price_Range: '$5-8', Health_Score: 'E' },
  { rid: 53, Today: '', Price_Range: '$59-71', Health_Score: 'F' },
  { rid: 54, Today: '', Price_Range: '$46-50', Health_Score: 'F' },
  { rid: 55, Today: '', Price_Range: '$0-0', Health_Score: 'C' },
  { rid: 56, Today: '', Price_Range: '$12-17', Health_Score: 'F' },
  { rid: 57, Today: '', Price_Range: '$30-41', Health_Score: 'E' },
  { rid: 58, Today: '', Price_Range: '$2-2', Health_Score: 'F' },
  { rid: 59, Today: '', Price_Range: '$24-24', Health_Score: 'D' },
  { rid: 60, Today: '', Price_Range: '$57-108', Health_Score: 'F' },
  { rid: 61, Today: '', Price_Range: '$55-58', Health_Score: 'A' },
  { rid: 62, Today: '', Price_Range: '$41-67', Health_Score: 'A' },
  { rid: 63, Today: '', Price_Range: '$50-71', Health_Score: 'A' },
  { rid: 64, Today: '', Price_Range: '$9-15', Health_Score: 'C' },
  { rid: 65, Today: '', Price_Range: '$40-53', Health_Score: 'F' },
  { rid: 66, Today: '', Price_Range: '$20-33', Health_Score: 'E' },
  { rid: 67, Today: '', Price_Range: '$14-23', Health_Score: 'F' },
  { rid: 68, Today: '', Price_Range: '$18-20', Health_Score: 'F' },
  { rid: 69, Today: '', Price_Range: '$31-33', Health_Score: 'D' },
  { rid: 70, Today: '', Price_Range: '$1-1', Health_Score: 'E' },
  { rid: 71, Today: '', Price_Range: '$49-55', Health_Score: 'F' },
  { rid: 72, Today: '', Price_Range: '$56-82', Health_Score: 'A' },
  { rid: 73, Today: '', Price_Range: '$29-40', Health_Score: 'E' },
  { rid: 74, Today: '', Price_Range: '$5-7', Health_Score: 'E' },
  { rid: 75, Today: '', Price_Range: '$35-43', Health_Score: 'A' },
  { rid: 76, Today: '', Price_Range: '$6-6', Health_Score: 'F' },
  { rid: 77, Today: '', Price_Range: '$19-22', Health_Score: 'B' },
  { rid: 78, Today: '', Price_Range: '$29-37', Health_Score: 'D' },
  { rid: 79, Today: '', Price_Range: '$15-29', Health_Score: 'E' },
  { rid: 80, Today: '', Price_Range: '$5-5', Health_Score: 'A' },
  { rid: 81, Today: '', Price_Range: '$44-72', Health_Score: 'E' },
  { rid: 82, Today: '', Price_Range: '$57-64', Health_Score: 'B' },
  { rid: 83, Today: '', Price_Range: '$57-57', Health_Score: 'B' },
  { rid: 84, Today: '', Price_Range: '$21-30', Health_Score: 'F' },
  { rid: 85, Today: '', Price_Range: '$6-8', Health_Score: 'D' },
  { rid: 86, Today: '', Price_Range: '$42-60', Health_Score: 'B' },
  { rid: 87, Today: '', Price_Range: '$26-33', Health_Score: 'C' },
  { rid: 88, Today: '', Price_Range: '$21-25', Health_Score: 'E' },
  { rid: 89, Today: '', Price_Range: '$52-88', Health_Score: 'A' },
  { rid: 90, Today: '', Price_Range: '$26-48', Health_Score: 'B' },
  { rid: 91, Today: '', Price_Range: '$12-17', Health_Score: 'D' },
  { rid: 92, Today: '', Price_Range: '$35-60', Health_Score: 'A' },
  { rid: 93, Today: '', Price_Range: '$41-58', Health_Score: 'A' },
  { rid: 94, Today: '', Price_Range: '$46-91', Health_Score: 'B' },
  { rid: 95, Today: '', Price_Range: '$3-4', Health_Score: 'A' },
  { rid: 96, Today: '', Price_Range: '$51-84', Health_Score: 'C' },
  { rid: 97, Today: '', Price_Range: '$44-56', Health_Score: 'C' },
  { rid: 98, Today: '', Price_Range: '$36-67', Health_Score: 'B' },
  { rid: 99, Today: '', Price_Range: '$40-71', Health_Score: 'F' },
  { rid: 100, Today: '', Price_Range: '$54-101', Health_Score: 'F' }
]

const miscData = [
  { rid: 1, Takes_Reservations: 'Yes', TakeZout: 'No', Accepts_Credit_Cards: 'Yes', Accepts_Apple_Pay: 'No', Good_For: 'No', Parking: 'Street', Bike_Parking: 'None', Wheelchair_Accessible: 'Maybe', Good_For_Kids: 'Yup', Good_For_Groups: 'No', Dogs_Allowed: 'Ok', Attire: 'Strict', Ambience: 'Casual', Noise_Level: 'Loud', Alcohol: 'Mild', Outdoor_Seating: 'No', Wifi: 'Yes', Has_TV: 'Yes', Caters: 'No', Gender_Neutral_Restrooms: 'No', Smoking: 'No'}, 
  { rid: 2, TakeZout: 'Possibly', Accepts_Credit_Cards: 'Maybe', Accepts_Apple_Pay: 'Yup', Good_For: 'No', Parking: 'No', Bike_Parking: 'Yes', Wheelchair_Accessible: 'No', Good_For_Kids: 'Yes', Good_For_Groups: 'None', Dogs_Allowed: '?', Attire: '?', Noise_Level: '?', Outdoor_Seating: 'You Wish', Wifi: 'None', Has_TV: 'Nope', Caters: 'Yes', Gender_Neutral_Restrooms: 'Yes', Smoking: 'No' },
  { rid: 3, Takes_Reservations: 'Maybe', TakeZout: 'Yup', Accepts_Credit_Cards: 'Yup', Accepts_Apple_Pay: 'Yes', Good_For: 'Yes', Wheelchair_Accessible: 'Yes', Dogs_Allowed: '?', Attire: 'Yes', Ambience: 'No', Noise_Level: 'Yes', Alcohol: 'Maybe', Outdoor_Seating: 'No', Wifi: 'Yup', Has_TV: 'No', Gender_Neutral_Restrooms: 'Yes', Smoking: 'Yes' }, 
  { rid: 4, Takes_Reservations: 'No', TakeZout: 'You Wish', Accepts_Credit_Cards: '?', Accepts_Apple_Pay: 'No', Good_For: 'No', Bike_Parking: '?', Wheelchair_Accessible: 'None', Good_For_Groups: 'Yes', Dogs_Allowed: 'None', Wifi: 'Maybe', Caters: 'Maybe' }, 
  { rid: 5, Takes_Reservations: 'Maybe', TakeZout: 'No', Accepts_Credit_Cards: 'Yes', Parking: 'Possibly', Bike_Parking: 'None', Good_For_Groups: 'No', Dogs_Allowed: 'Nope', Attire: 'None', Ambience: 'No', Outdoor_Seating: 'No', Wifi: 'Yes', Smoking: 'You Wish' }, { rid: 6, Takes_Reservations: 'None', TakeZout: 'No', Accepts_Apple_Pay: 'Yes', Good_For: 'Yup', Parking: 'Yes', Bike_Parking: 'Yup', Wheelchair_Accessible: 'Yes', Good_For_Groups: 'Possibly', Dogs_Allowed: 'Maybe', Attire: 'No', Outdoor_Seating: 'You Wish', Has_TV: 'Possibly', Caters: 'No', Gender_Neutral_Restrooms: 'Yes', Smoking: 'None' }, { rid: 7, Accepts_Credit_Cards: 'Maybe', Accepts_Apple_Pay: 'Yes', Parking: 'No', Bike_Parking: 'You Wish', Good_For_Kids: 'Possibly', Dogs_Allowed: 'Yes', Ambience: 'Yup', Outdoor_Seating: 'Yes', Wifi: 'Yes', Has_TV: 'Maybe', Caters: 'No', Gender_Neutral_Restrooms: 'Yes', Smoking: 'Yup' }, 
  { rid: 8, TakeZout: 'No', Accepts_Credit_Cards: 'None', Accepts_Apple_Pay: 'Maybe', Good_For: 'Yes', Bike_Parking: 'You Wish', Wheelchair_Accessible: 'Maybe', Good_For_Groups: 'Nope', Dogs_Allowed: '?', Ambience: 'Yes', Outdoor_Seating: 'Yup', Wifi: 'Nope', Has_TV: 'No', Caters: 'Maybe', Smoking: 'Yup' }, 
  { rid: 9, TakeZout: 'Yes', Accepts_Apple_Pay: 'Yes', Good_For: 'You Wish', Good_For_Kids: 'Nope', Good_For_Groups: 'No', Ambience: 'Yup', Noise_Level: 'None', Alcohol: 'Yes', Outdoor_Seating: 'Yup', Wifi: 'Nope', Smoking: 'Yes' }, 
  { rid: 10, Takes_Reservations: 'Yes', TakeZout: 'Nope', Accepts_Credit_Cards: 'No', Good_For: '?', Bike_Parking: 'Yes', Good_For_Kids: 'Maybe', Attire: 'Yes', Noise_Level: 'No', Alcohol: 'You Wish', Outdoor_Seating: 'Yes', Gender_Neutral_Restrooms: 'Nope' }, 
  { rid: 11, Takes_Reservations: 'Possibly', TakeZout: 'You Wish', Accepts_Apple_Pay: 'No', Bike_Parking: 'Yes', Good_For_Groups: 'Yup', Dogs_Allowed: 'Possibly', Attire: 'Yes', Ambience: 'No', Noise_Level: 'Possibly', Alcohol: 'No', Outdoor_Seating: 'Nope', Wifi: 'Possibly', Has_TV: 'Yup', Smoking: 'Yes' }, 
  { rid: 12, Bike_Parking: 'No', Good_For_Groups: 'Yes', Dogs_Allowed: 'No', Noise_Level: 'Yes', Alcohol: 'No', Outdoor_Seating: 'No', Wifi: 'Yes', Has_TV: 'Maybe', Smoking: 'Maybe' }, 
  { rid: 13, Takes_Reservations: 'None', TakeZout: 'Yes', Parking: 'Possibly', Wheelchair_Accessible: 'Yes', Good_For_Kids: 'No', Good_For_Groups: 'Yup', Attire: 'Possibly', Ambience: 'Yup', Noise_Level: 'Maybe', Alcohol: 'Yup', Wifi: 'Maybe', Caters: 'Maybe', Gender_Neutral_Restrooms: 'Yup' }, 
  { rid: 14, TakeZout: 'Yes', Good_For: 'Yes', Bike_Parking: 'Maybe', Wheelchair_Accessible: 'Yes', Good_For_Kids: 'Possibly', Dogs_Allowed: 'Nope', Ambience: 'No', Noise_Level: 'Yes', Outdoor_Seating: 'None', Caters: 'Yes', Gender_Neutral_Restrooms: '?' }, { rid: 15, Takes_Reservations: 'No', TakeZout: 'No', Accepts_Apple_Pay: 'Possibly', Good_For: 'Maybe', Parking: 'No', Wheelchair_Accessible: 'Maybe', Good_For_Kids: 'None', Good_For_Groups: 'Maybe', Noise_Level: 'Nope', Alcohol: 'None', Wifi: 'Maybe', Has_TV: 'No', Gender_Neutral_Restrooms: 'No' }, 
  { rid: 16, Accepts_Credit_Cards: 'Maybe', Accepts_Apple_Pay: 'Yes', Parking: 'Possibly', Bike_Parking: 'Yes', Good_For_Groups: 'No', Noise_Level: 'Possibly', Alcohol: '?', Wifi: 'Yes', Has_TV: 'Nope', Gender_Neutral_Restrooms: '?', Smoking: 'You Wish' }, 
  { rid: 17, Takes_Reservations: 'No', TakeZout: 'Maybe', Parking: '?', Bike_Parking: 'No', Wheelchair_Accessible: 'Yes', Good_For_Groups: 'No', Dogs_Allowed: 'Yes', Alcohol: 'You Wish', Wifi: 'Possibly', Has_TV: 'Possibly', Caters: 'Yes', Smoking: 'Yes'}, 
  { rid: 18, Takes_Reservations: 'Yup', TakeZout: 'No', Accepts_Credit_Cards: 'No', Accepts_Apple_Pay: 'None', Good_For: 'No', Bike_Parking: 'No', Wheelchair_Accessible: 'Yes', Attire: 'No', Noise_Level: 'Yes', Alcohol: 'None', Wifi: 'Possibly', Caters: 'Yes', Gender_Neutral_Restrooms: 'Yes', Smoking: 'Possibly' }, 
  { rid: 19, Takes_Reservations: 'Yes', Accepts_Credit_Cards: 'No', Accepts_Apple_Pay: 'None', Bike_Parking: 'Yes', Wheelchair_Accessible: 'Yes', Good_For_Groups: 'None', Dogs_Allowed: 'Maybe', Attire: 'Yes', Ambience: 'Nope', Noise_Level: 'Yes', Alcohol: 'Yes', Has_TV: 'Yup', Caters: 'No', Gender_Neutral_Restrooms: 'Maybe', Smoking: 'Possibly' }, 
  { rid: 20, Takes_Reservations: 'Nope', Accepts_Apple_Pay: 'Maybe', Parking: 'None', Bike_Parking: 'Maybe', Ambience: 'No', Noise_Level: '?', Outdoor_Seating: 'Yes', Has_TV: 'No', Gender_Neutral_Restrooms: 'Maybe', Smoking: '?' }, 
  { rid: 21, Accepts_Apple_Pay: '?', Good_For: 'Maybe', Bike_Parking: 'Yup', Wheelchair_Accessible: 'No', Good_For_Kids: 'Yes', Dogs_Allowed: 'Yes', Attire: 'Yes', Ambience: 'Yup', Outdoor_Seating: 'Yes', Gender_Neutral_Restrooms: 'No', Smoking: 'Nope' }, 
  { rid: 22, Accepts_Credit_Cards: 'No', Accepts_Apple_Pay: 'Yes', Parking: 'Possibly', Bike_Parking: 'Yes', Good_For_Kids: 'You Wish', Dogs_Allowed: 'No', Ambience: 'None', Has_TV: 'None', Caters: 'Yes' }, 
  { rid: 23, Takes_Reservations: 'Nope', Accepts_Credit_Cards: 'Nope', Accepts_Apple_Pay: 'No', Bike_Parking: 'You Wish', Wheelchair_Accessible: 'No', Good_For_Groups: 'No', Dogs_Allowed: 'Maybe', Attire: 'Nope', Outdoor_Seating: 'No', Wifi: 'No', Has_TV: 'No', Caters: 'Nope', Smoking: 'Yup' }, 
  { rid: 24, Accepts_Credit_Cards: 'Yes', Bike_Parking: 'Yes', Wheelchair_Accessible: 'Yup', Good_For_Groups: 'No', Dogs_Allowed: 'Maybe', Noise_Level: 'Nope', Alcohol: 'No', Outdoor_Seating: 'No', Wifi: 'No', Has_TV: 'None', Caters: 'Yes' }, 
  { rid: 25, Takes_Reservations: 'Yup', TakeZout: 'Maybe', Accepts_Credit_Cards: 'Maybe', Good_For: 'Nope', Parking: 'None', Bike_Parking: 'Maybe', Good_For_Kids: 'Yes', Good_For_Groups: 'No', Dogs_Allowed: 'Yes', Alcohol: 'Nope', Wifi: 'Yup', Gender_Neutral_Restrooms: 'Yes', Smoking: 'No' }, 
  { rid: 26, Takes_Reservations: 'Maybe', TakeZout: 'Nope', Accepts_Credit_Cards: 'Maybe', Accepts_Apple_Pay: 'None', Good_For: 'Yes', Parking: 'Yes', Bike_Parking: 'Yes', Wheelchair_Accessible: 'You Wish', Good_For_Kids: 'Yes', Attire: 'No', Ambience: 'Yes', Noise_Level: 'Maybe', Alcohol: '?', Outdoor_Seating: 'Maybe', Gender_Neutral_Restrooms: 'None' }, 
  { rid: 27, Takes_Reservations: '?', TakeZout: 'Yes', Accepts_Credit_Cards: 'Maybe', Wheelchair_Accessible: 'You Wish', Good_For_Kids: 'Maybe', Good_For_Groups: 'None', Alcohol: 'No', Outdoor_Seating: 'No', Wifi: 'Yup', Has_TV: 'No', Caters: 'Yes', Gender_Neutral_Restrooms: 'Yes' }, 
  { rid: 28, Takes_Reservations: 'None', TakeZout: 'Maybe', Accepts_Apple_Pay: 'None', Good_For: 'No', Bike_Parking: 'You Wish', Good_For_Groups: 'Maybe', Ambience: 'None', Noise_Level: 'None', Alcohol: 'None', Outdoor_Seating: 'Yes', Wifi: 'Maybe', Has_TV: 'None', Smoking: '?' }, 
  { rid: 29, TakeZout: 'None', Accepts_Credit_Cards: 'You Wish', Wheelchair_Accessible: 'None', Good_For_Kids: 'No', Good_For_Groups: 'You Wish', Dogs_Allowed: 'None', Attire: 'You Wish', Noise_Level: 'Maybe', Alcohol: 'Yes', Outdoor_Seating: 'Possibly', Gender_Neutral_Restrooms: 'Yes' }, 
  { rid: 30, Accepts_Credit_Cards: 'No', Accepts_Apple_Pay: '?', Good_For: 'Yes', Bike_Parking: 'No', Wheelchair_Accessible: 'Yup', Dogs_Allowed: 'None', Attire: 'No', Noise_Level: 'None', Alcohol: 'None', Outdoor_Seating: 'Yes', Wifi: 'Nope', Has_TV: 'No', Caters: 'None', Gender_Neutral_Restrooms: 'Yes', Smoking: 'Yes' }, 
  { rid: 31, Takes_Reservations: 'Yes', Accepts_Credit_Cards: 'No', Accepts_Apple_Pay: 'No', Good_For: 'No', Parking: 'No', Wheelchair_Accessible: 'None', Good_For_Kids: 'Nope', Good_For_Groups: 'Yes', Ambience: 'No', Outdoor_Seating: 'Yup', Has_TV: 'Yes', Smoking: 'None' }, 
  { rid: 32, Takes_Reservations: 'No', TakeZout: 'Maybe', Accepts_Credit_Cards: 'No', Parking: 'None', Good_For_Kids: 'Yes', Good_For_Groups: 'Possibly', Attire: 'No', Ambience: 'No', Noise_Level: 'Nope', Alcohol: 'Yes', Outdoor_Seating: 'No', Wifi: 'No', Caters: '?', Gender_Neutral_Restrooms: 'Nope' }, 
  { rid: 33, Takes_Reservations: 'No', TakeZout: 'Yes', Accepts_Credit_Cards: 'No', Accepts_Apple_Pay: 'Yes', Good_For: 'Maybe', Parking: 'Yes', Bike_Parking: 'Yes', Wheelchair_Accessible: 'Nope', Good_For_Kids: 'Nope', Good_For_Groups: 'No', Dogs_Allowed: 'Yes', Attire: 'Yes', Ambience: 'No', Noise_Level: 'Maybe', Outdoor_Seating: 'Yes', Has_TV: 'You Wish', Caters: 'Yup', Smoking: 'Nope' }, 
  { rid: 34, Takes_Reservations: 'Yes', TakeZout: 'Maybe', Accepts_Apple_Pay: 'Maybe', Good_For: 'Yes', Parking: 'No', Bike_Parking: 'No', Good_For_Kids: 'No', Good_For_Groups: 'Yes', Ambience: 'Maybe', Noise_Level: 'Yup', Outdoor_Seating: 'Nope', Has_TV: 'Yup', Gender_Neutral_Restrooms: 'Maybe', Smoking: 'None' }, 
  { rid: 35, Takes_Reservations: 'Yes', TakeZout: 'Yes', Accepts_Credit_Cards: 'No', Accepts_Apple_Pay: 'Maybe', Parking: 'Possibly', Bike_Parking: 'Yes', Good_For_Groups: 'No', Dogs_Allowed: 'No', Ambience: 'You Wish', Noise_Level: 'Yes', Outdoor_Seating: 'Yes', Has_TV: 'Nope', Gender_Neutral_Restrooms: 'Yup', Smoking: '?' }, 
  { rid: 36, Takes_Reservations: 'Maybe', Accepts_Credit_Cards: 'Possibly', Good_For: '?', Bike_Parking: 'Maybe', Wheelchair_Accessible: 'Maybe', Noise_Level: 'No', Alcohol: 'No', Has_TV: 'No', Caters: 'Nope', Gender_Neutral_Restrooms: 'Nope', Smoking: 'Maybe' }, 
  { rid: 37, Takes_Reservations: 'Yes', TakeZout: 'None', Accepts_Credit_Cards: 'Possibly', Accepts_Apple_Pay: 'Yes', Parking: 'Maybe', Bike_Parking: '?', Good_For_Kids: 'No', Good_For_Groups: 'Possibly', Dogs_Allowed: 'Possibly', Attire: 'Possibly', Ambience: 'Nope', Noise_Level: 'No', Alcohol: 'Nope', Has_TV: 'Possibly', Caters: 'No', Smoking: '?' }, 
  { rid: 38, Takes_Reservations: 'Yes', TakeZout: 'Maybe', Accepts_Credit_Cards: 'Yes', Accepts_Apple_Pay: 'Yes', Good_For: 'Maybe', Parking: 'Yes', Bike_Parking: 'Yes', Good_For_Kids: 'Yes', Dogs_Allowed: 'Yes', Ambience: 'You Wish', Alcohol: 'Yes', Outdoor_Seating: 'Yes', Caters: 'Maybe', Smoking: 'Possibly' }, 
  { rid: 39, Takes_Reservations: 'No', TakeZout: 'Yes', Accepts_Apple_Pay: 'Yes', Parking: 'Yes', Bike_Parking: 'None', Attire: 'Yes', Ambience: 'No', Outdoor_Seating: 'Maybe', Has_TV: 'No', Caters: 'Yup', Gender_Neutral_Restrooms: 'No' }, 
  { rid: 40, Takes_Reservations: 'Maybe', Accepts_Apple_Pay: 'No', Parking: 'Possibly', Wheelchair_Accessible: 'Yes', Good_For_Kids: 'No', Good_For_Groups: 'Maybe', Dogs_Allowed: 'You Wish', Attire: 'No', Alcohol: 'Yes', Wifi: 'Possibly', Has_TV: 'Yes', Caters: 'No', Smoking: 'None' }, 
  { rid: 41, Takes_Reservations: 'Yup', Bike_Parking: 'None', Wheelchair_Accessible: 'No', Good_For_Kids: 'Maybe', Good_For_Groups: 'No', Dogs_Allowed: 'No', Attire: 'Yes', Ambience: 'No', Alcohol: 'Maybe', Outdoor_Seating: 'Nope', Has_TV: 'You Wish' }, 
  { rid: 42, Takes_Reservations: 'Maybe', TakeZout: 'Yes', Parking: 'No', Wheelchair_Accessible: 'None', Good_For_Kids: 'Maybe', Good_For_Groups: 'Yes', Ambience: 'Yes', Noise_Level: 'Nope', Outdoor_Seating: 'Yes', Caters: 'No', Gender_Neutral_Restrooms: 'Yes', Smoking: 'Yes' }, 
  { rid: 43, Takes_Reservations: 'Maybe', Accepts_Apple_Pay: 'Yes', Bike_Parking: 'Yes', Wheelchair_Accessible: 'Yes', Good_For_Kids: 'Yes', Dogs_Allowed: 'No', Attire: 'No', Ambience: 'Yes', Alcohol: 'Yes', Outdoor_Seating: 'Nope', Wifi: 'Yes', Caters: 'None', Smoking: 'No' }, 
  { rid: 44, Accepts_Credit_Cards: 'You Wish', Parking: 'Nope', Wheelchair_Accessible: 'Yes', Good_For_Groups: 'No', Dogs_Allowed: 'Yes', Ambience: 'Yes', Noise_Level: 'Possibly', Outdoor_Seating: 'No', Gender_Neutral_Restrooms: 'None' }, 
  { rid: 45, Takes_Reservations: '?', Accepts_Credit_Cards: 'None', Good_For: 'Nope', Parking: 'Maybe', Bike_Parking: 'No', Wheelchair_Accessible: 'None', Good_For_Kids: 'Yes', Dogs_Allowed: 'Maybe', Ambience: 'Nope', Noise_Level: 'No', Alcohol: 'No', Has_TV: 'Yes', Caters: 'No', Gender_Neutral_Restrooms: 'Possibly', Smoking: 'Maybe' }, 
  { rid: 46, TakeZout: 'Possibly', Accepts_Credit_Cards: 'Yup', Good_For: 'Maybe', Parking: 'Yes', Bike_Parking: 'No', Good_For_Kids: 'Maybe', Dogs_Allowed: 'None', Ambience: 'Yes', Noise_Level: 'None', Outdoor_Seating: 'Yes', Has_TV: 'No', Gender_Neutral_Restrooms: 'Yes' }, 
  { rid: 47, Takes_Reservations: 'Nope', TakeZout: 'None', Accepts_Credit_Cards: 'None', Accepts_Apple_Pay: 'None', Good_For: 'Maybe', Good_For_Kids: 'You Wish', Good_For_Groups: 'Yes', Dogs_Allowed: 'No', Ambience: 'Maybe', Noise_Level: 'Yes', Alcohol: 'Maybe', Outdoor_Seating: 'Maybe', Wifi: 'No' }, 
  { rid: 48, Takes_Reservations: 'No', Accepts_Credit_Cards: 'Yes', Accepts_Apple_Pay: 'Yup', Good_For: 'Yes', Bike_Parking: 'No', Good_For_Kids: 'Maybe', Good_For_Groups: 'Yes', Dogs_Allowed: 'Yes', Attire: 'No', Ambience: 'Yup', Noise_Level: 'No', Alcohol: 'Yup', Outdoor_Seating: 'Yes', Has_TV: 'Possibly', Caters: 'Yes', Gender_Neutral_Restrooms: 'You Wish', Smoking: 'No' }, 
  { rid: 49, Takes_Reservations: 'No', Accepts_Apple_Pay: 'Yes', Good_For: 'None', Parking: 'You Wish', Good_For_Kids: 'No', Good_For_Groups: 'Yes', Dogs_Allowed: 'Yup', Attire: 'Yup', Ambience: 'Yes', Alcohol: 'Possibly', Gender_Neutral_Restrooms: 'Maybe' }, 
  { rid: 50, TakeZout: 'None', Accepts_Apple_Pay: 'Yup', Good_For: 'None', Parking: 'Yes', Bike_Parking: '?', Good_For_Kids: 'No', Ambience: 'Yes', Noise_Level: 'Yes', Wifi: 'No', Has_TV: 'None', Smoking: 'Nope' }, 
  { rid: 51, Takes_Reservations: 'No', TakeZout: 'Yes', Accepts_Credit_Cards: 'Maybe', Good_For: 'Possibly', Parking: 'Yes', Bike_Parking: 'Nope', Wheelchair_Accessible: 'Yes', Dogs_Allowed: 'Yes', Ambience: '?', Noise_Level: 'Maybe', Alcohol: 'No', Outdoor_Seating: 'Yes', Wifi: 'None', Has_TV: 'Yes', Smoking: 'Maybe' },
  { rid: 52, TakeZout: 'Yup', Accepts_Credit_Cards: 'No', Accepts_Apple_Pay: 'No', Good_For: 'Possibly', Parking: 'Yes', Bike_Parking: 'No', Wheelchair_Accessible: 'None', Dogs_Allowed: 'No', Ambience: 'Yup', Noise_Level: 'Yes', Has_TV: 'None', Caters: 'Yup' }, 
  { rid: 53, Takes_Reservations: 'Possibly', TakeZout: 'Yes', Accepts_Credit_Cards: 'Yup', Good_For: 'No', Parking: 'Possibly', Bike_Parking: 'Nope', Wheelchair_Accessible: 'Yes', Good_For_Kids: 'Yes', Good_For_Groups: '?', Noise_Level: 'No', Outdoor_Seating: 'Possibly', Has_TV: 'Yes', Smoking: 'Yes' }, 
  { rid: 54, Accepts_Apple_Pay: 'Maybe', Good_For: 'Nope', Parking: 'You Wish', Wheelchair_Accessible: 'Yes', Good_For_Kids: 'Yup', Attire: 'None', Ambience: 'None', Noise_Level: 'Yes', Alcohol: 'Nope', Outdoor_Seating: 'Yes', Has_TV: 'Yes', Caters: 'No', Gender_Neutral_Restrooms: 'Yup', Smoking: 'Maybe' }, 
  { rid: 55, Accepts_Credit_Cards: '?', Good_For: 'None', Bike_Parking: '?', Wheelchair_Accessible: 'No', Good_For_Kids: 'Yes', Good_For_Groups: 'No', Attire: 'No', Ambience: 'No', Noise_Level: 'Maybe', Alcohol: 'No', Outdoor_Seating: 'No' }, 
  { rid: 56, Takes_Reservations: 'Yes', Parking: 'None', Bike_Parking: 'Yup', Wheelchair_Accessible: 'No', Attire: 'No', Noise_Level: 'No', Alcohol: 'No', Outdoor_Seating: 'None', Wifi: 'No', Has_TV: 'Possibly', Caters: 'Maybe', Gender_Neutral_Restrooms: 'Yup' }, 
  { rid: 57, Takes_Reservations: 'Yes', TakeZout: 'Yes', Accepts_Credit_Cards: 'Yes', Good_For: 'Yes', Parking: 'Possibly', Bike_Parking: 'Yes', Dogs_Allowed: 'Maybe', Attire: 'Possibly', Outdoor_Seating: 'Yes', Wifi: 'You Wish', Has_TV: 'No', Caters: 'Yes', Gender_Neutral_Restrooms: 'No', Smoking: 'Yes' }, 
  { rid: 58, Takes_Reservations: 'Yup', Accepts_Credit_Cards: 'Possibly', Good_For: 'No', Parking: 'None', Good_For_Groups: 'Yes', Noise_Level: 'No', Alcohol: 'Yup', Has_TV: 'Yes', Gender_Neutral_Restrooms: 'You Wish' }, 
  { rid: 59, Takes_Reservations: 'Yes', TakeZout: 'Possibly', Accepts_Credit_Cards: 'No', Accepts_Apple_Pay: 'No', Good_For: 'Yes', Bike_Parking: 'Yes', Wheelchair_Accessible: 'Nope', Good_For_Kids: 'None', Good_For_Groups: 'Yes', Dogs_Allowed: 'Yup', Attire: 'No', Has_TV: 'Maybe', Caters: 'None', Gender_Neutral_Restrooms: 'Possibly' }, 
  { rid: 60, Takes_Reservations: 'Nope', Wheelchair_Accessible: 'No', Good_For_Kids: 'Yup', Dogs_Allowed: 'Yes', Ambience: 'Maybe', Outdoor_Seating: 'Nope', Caters: '?' }, 
  { rid: 61, Good_For: 'Yes', Bike_Parking: '?', Good_For_Kids: 'Yes', Attire: 'None', Ambience: 'Yes', Alcohol: 'Yes', Outdoor_Seating: 'Yes', Wifi: 'Yes', Caters: 'Yes' }, 
  { rid: 62, Parking: 'No', Bike_Parking: 'None', Wheelchair_Accessible: 'None', Good_For_Kids: 'You Wish', Good_For_Groups: 'You Wish', Dogs_Allowed: 'None', Attire: 'No', Ambience: 'Yup', Noise_Level: 'Nope', Alcohol: 'Yes', Wifi: 'Yes', Has_TV: 'Possibly' }, 
  { rid: 63, Takes_Reservations: 'Nope', Accepts_Credit_Cards: 'Yes', Accepts_Apple_Pay: 'Nope', Good_For: 'Yes', Bike_Parking: 'None', Wheelchair_Accessible: 'Maybe', Good_For_Kids: 'Maybe', Good_For_Groups: 'No', Noise_Level: 'You Wish', Alcohol: 'You Wish', Outdoor_Seating: 'No', Wifi: 'No', Has_TV: 'Nope', Caters: 'Yes', Smoking: 'Yes' }, 
  { rid: 64, Takes_Reservations: 'Yes', TakeZout: 'No', Accepts_Credit_Cards: 'None', Accepts_Apple_Pay: '?', Parking: 'Possibly', Bike_Parking: 'Yes', Good_For_Kids: 'Yes', Good_For_Groups: 'Yup', Alcohol: 'Maybe', Outdoor_Seating: 'No', Wifi: 'Possibly', Smoking: 'No' }, 
  { rid: 65, TakeZout: 'Yup', Accepts_Credit_Cards: 'Maybe', Accepts_Apple_Pay: 'None', Good_For: 'Nope', Bike_Parking: 'Possibly', Wheelchair_Accessible: 'No', Good_For_Kids: 'Nope', Good_For_Groups: 'You Wish', Dogs_Allowed: 'Maybe', Ambience: 'Yes', Noise_Level: '?', Alcohol: 'Yes', Outdoor_Seating: 'Yes', Wifi: 'Yes', Smoking: 'No' }, 
  { rid: 66, Takes_Reservations: 'No', TakeZout: 'None', Accepts_Credit_Cards: 'Nope', Parking: 'No', Bike_Parking: 'None', Good_For_Kids: 'None', Dogs_Allowed: 'No', Attire: 'Yes', Ambience: 'Yes', Noise_Level: 'Yes', Alcohol: 'Yes', Gender_Neutral_Restrooms: 'Yes' }, 
  { rid: 67, TakeZout: 'Yes', Accepts_Apple_Pay: 'No', Good_For: 'Maybe', Wheelchair_Accessible: 'No', Good_For_Kids: '?', Good_For_Groups: 'None', Attire: 'Yes', Noise_Level: 'Maybe', Alcohol: 'No', Has_TV: 'No', Caters: 'You Wish', Gender_Neutral_Restrooms: 'You Wish', Smoking: 'Yes' }, 
  { rid: 68, Takes_Reservations: 'Yes', TakeZout: 'Maybe', Parking: 'No', Bike_Parking: 'None', Good_For_Kids: 'No', Dogs_Allowed: 'Possibly', Attire: 'None', Ambience: 'Yup', Outdoor_Seating: 'Yup', Wifi: 'Yup', Has_TV: 'Maybe', Caters: 'Possibly', Gender_Neutral_Restrooms: 'Yes', Smoking: 'You Wish' }, 
  { rid: 69, Takes_Reservations: 'No', Accepts_Apple_Pay: 'Yes', Parking: 'Yes', Bike_Parking: 'No', Good_For_Groups: 'Possibly', Dogs_Allowed: 'Yes', Attire: 'You Wish', Ambience: 'Yes', Noise_Level: 'Yes', Alcohol: 'Nope', Outdoor_Seating: 'Yes', Caters: 'Yes', Gender_Neutral_Restrooms: '?' }, 
  { rid: 70, TakeZout: '?', Accepts_Apple_Pay: 'None', Good_For: 'Maybe', Parking: 'No', Good_For_Kids: 'You Wish', Good_For_Groups: 'No', Dogs_Allowed: 'You Wish', Ambience: 'None', Wifi: 'You Wish', Has_TV: 'No', Caters: 'Yes', Smoking: 'No' }, 
  { rid: 71, TakeZout: 'No', Good_For: 'No', Bike_Parking: 'Yes', Good_For_Groups: 'No', Dogs_Allowed: 'Yes', Attire: 'No', Noise_Level: 'Yes', Alcohol: 'Maybe', Has_TV: 'Yes', Caters: 'None', Gender_Neutral_Restrooms: 'Maybe', Smoking: 'Maybe' }, 
  { rid: 72, Takes_Reservations: 'Yes', TakeZout: 'Yup', Good_For: 'No', Parking: 'Yup', Bike_Parking: 'Yes', Good_For_Groups: 'None', Dogs_Allowed: 'You Wish', Ambience: 'No', Noise_Level: 'No', Alcohol: 'Possibly', Wifi: 'None', Has_TV: 'No', Caters: 'Yes', Gender_Neutral_Restrooms: 'Maybe' }, 
  { rid: 73, Takes_Reservations: 'Yes', Accepts_Credit_Cards: 'Yes', Accepts_Apple_Pay: 'Yup', Good_For: 'None', Parking: 'None', Bike_Parking: 'Yes', Wheelchair_Accessible: 'Maybe', Good_For_Kids: 'Yes', Attire: 'Yes', Ambience: 'No', Noise_Level: 'Maybe', Smoking: 'Yes' }, 
  { rid: 74, TakeZout: 'Yes', Accepts_Credit_Cards: 'Yes', Accepts_Apple_Pay: 'Yup', Parking: 'None', Bike_Parking: 'No', Ambience: 'None', Wifi: 'Yes', Caters: 'Maybe' }, 
  { rid: 75, TakeZout: 'Yes', Accepts_Credit_Cards: 'Nope', Good_For: 'Maybe', Parking: 'None', Bike_Parking: 'Possibly', Good_For_Kids: 'None', Good_For_Groups: 'Maybe', Dogs_Allowed: 'No', Attire: 'No', Ambience: 'Maybe', Outdoor_Seating: '?', Wifi: 'Yup', Has_TV: 'Yes' },
  { rid: 76, TakeZout: 'Yes', Accepts_Credit_Cards: 'Yes', Accepts_Apple_Pay: 'You Wish', Good_For: 'Nope', Parking: 'None', Bike_Parking: 'Possibly', Good_For_Kids: 'No', Good_For_Groups: 'Yup', Dogs_Allowed: 'Possibly', Attire: 'Yes', Ambience: 'Possibly', Outdoor_Seating: '?', Gender_Neutral_Restrooms: 'Yes', Smoking: 'Yes' }, 
  { rid: 77, Takes_Reservations: '?', TakeZout: 'Yes', Accepts_Credit_Cards: 'Yes', Good_For: 'Nope', Bike_Parking: 'Yes', Wheelchair_Accessible: 'Yes', Good_For_Kids: 'Nope', Attire: 'Yes', Ambience: 'No', Has_TV: 'Yup', Caters: 'Nope', Gender_Neutral_Restrooms: 'You Wish', Smoking: 'No' }, 
  { rid: 78, Takes_Reservations: 'Yes', TakeZout: 'You Wish', Parking: 'You Wish', Wheelchair_Accessible: 'Possibly', Dogs_Allowed: 'Yes', Attire: '?', Outdoor_Seating: 'Maybe', Wifi: 'You Wish', Has_TV: 'None', Caters: 'Maybe', Gender_Neutral_Restrooms: 'Maybe', Smoking: 'Maybe' }, 
  { rid: 79, Bike_Parking: 'Yes', Attire: 'Yup', Ambience: 'Yes', Noise_Level: 'You Wish', Alcohol: 'None', Outdoor_Seating: 'Yes', Wifi: 'Maybe', Caters: 'Yes', Gender_Neutral_Restrooms: 'You Wish', Smoking: 'You Wish' }, 
  { rid: 80, Takes_Reservations: 'Yes', TakeZout: 'Yes', Accepts_Credit_Cards: 'Maybe', Good_For: 'None', Parking: 'Yes', Good_For_Kids: 'No', Good_For_Groups: 'Yes', Dogs_Allowed: 'Maybe', Ambience: 'Maybe', Noise_Level: 'Yes', Alcohol: 'Maybe', Wifi: 'Maybe', Has_TV: 'No', Gender_Neutral_Restrooms: 'Yes', Smoking: 'Yes' }, 
  { rid: 81, Takes_Reservations: 'No', TakeZout: 'Yes', Accepts_Apple_Pay: '?', Parking: 'No', Bike_Parking: 'Nope', Wheelchair_Accessible: 'No', Good_For_Groups: 'Maybe', Ambience: 'No', Noise_Level: 'Yup', Wifi: 'None', Caters: 'Nope', Gender_Neutral_Restrooms: 'Maybe' }, 
  { rid: 82, Takes_Reservations: 'Nope', TakeZout: 'Possibly', Accepts_Credit_Cards: 'None', Good_For: 'None', Good_For_Kids: 'Maybe', Dogs_Allowed: 'Yes', Noise_Level: 'Possibly', Alcohol: 'No', Outdoor_Seating: 'None', Wifi: 'No', Has_TV: 'Yup', Caters: '?', Gender_Neutral_Restrooms: 'None', Smoking: 'Nope' }, 
  { rid: 83, Takes_Reservations: 'No', TakeZout: 'Maybe', Accepts_Credit_Cards: 'Yes', Accepts_Apple_Pay: 'Possibly', Bike_Parking: 'No', Wheelchair_Accessible: 'Yes', Good_For_Kids: 'Yup', Dogs_Allowed: 'Yes', Attire: 'Yup', Ambience: 'None', Noise_Level: 'None', Wifi: 'Yup', Caters: 'No', Gender_Neutral_Restrooms: 'Nope' }, 
  { rid: 84, Accepts_Credit_Cards: 'None', Accepts_Apple_Pay: 'Nope', Parking: 'Maybe', Wheelchair_Accessible: 'Possibly', Good_For_Kids: 'No', Good_For_Groups: 'None', Dogs_Allowed: 'Yes', Ambience: 'Possibly', Noise_Level: 'Yes', Outdoor_Seating: 'Yes', Wifi: 'Yes', Has_TV: 'None' }, 
  { rid: 85, Good_For: 'No', Parking: 'Maybe', Bike_Parking: 'Yes', Good_For_Kids: 'Yes', Dogs_Allowed: 'No', Attire: 'Nope', Ambience: 'No', Alcohol: 'None', Outdoor_Seating: 'Yes', Has_TV: 'Yes', Caters: 'Possibly' }, 
  { rid: 86, Takes_Reservations: 'No', Accepts_Apple_Pay: 'Yes', Good_For: 'None', Bike_Parking: 'Yup', Wheelchair_Accessible: 'Yes', Good_For_Kids: 'Yes', Dogs_Allowed: 'Yes', Ambience: 'Yup', Outdoor_Seating: 'Yes', Has_TV: 'Maybe', Caters: 'Maybe', Gender_Neutral_Restrooms: 'Possibly', Smoking: 'Yes' }, 
  { rid: 87, TakeZout: 'No', Accepts_Apple_Pay: 'Yes', Parking: 'Yes', Bike_Parking: 'Maybe', Wheelchair_Accessible: 'Yes', Good_For_Kids: 'Yes', Good_For_Groups: 'No', Attire: 'Yes', Ambience: 'Possibly', Noise_Level: 'None', Wifi: 'Nope', Gender_Neutral_Restrooms: 'Yes', Smoking: '?' }, 
  { rid: 88, Takes_Reservations: 'No', Accepts_Apple_Pay: 'Possibly', Wheelchair_Accessible: 'Yup', Good_For_Groups: 'Nope', Dogs_Allowed: 'You Wish', Attire: 'Yes', Ambience: 'No', Noise_Level: '?', Alcohol: 'Maybe', Outdoor_Seating: 'Yes' }, 
  { rid: 89, Takes_Reservations: 'Possibly', TakeZout: '?', Accepts_Credit_Cards: 'Possibly', Accepts_Apple_Pay: 'Possibly', Parking: '?', Bike_Parking: 'No', Attire: 'None', Ambience: 'Yes', Noise_Level: 'Yes', Has_TV: 'No' },
  { rid: 90, Takes_Reservations: 'None', Accepts_Credit_Cards: 'Maybe', Accepts_Apple_Pay: 'Yes', Parking: 'Yes', Bike_Parking: 'Yes', Good_For_Kids: 'Nope', Attire: 'No', Ambience: 'No', Noise_Level: 'Possibly', Alcohol: 'Nope', Outdoor_Seating: 'None', Wifi: 'Yes', Has_TV: 'Nope' }, 
  { rid: 91, Takes_Reservations: 'No', Accepts_Credit_Cards: 'Yup', Accepts_Apple_Pay: 'Yes', Good_For: 'Maybe', Parking: 'No', Bike_Parking: 'Nope', Wheelchair_Accessible: 'Yup', Good_For_Groups: 'Nope', Attire: 'Yes', Alcohol: 'Yes', Outdoor_Seating: 'Nope', Wifi: 'Maybe', Caters: 'Nope' }, 
  { rid: 92, TakeZout: 'No', Accepts_Credit_Cards: 'None', Accepts_Apple_Pay: 'No', Bike_Parking: 'Maybe', Good_For_Groups: 'Maybe', Dogs_Allowed: 'Yup', Alcohol: 'None', Outdoor_Seating: 'Yes', Has_TV: 'Yes', Gender_Neutral_Restrooms: 'Possibly' }, 
  { rid: 93, Accepts_Credit_Cards: 'No', Accepts_Apple_Pay: 'Maybe', Good_For: 'Nope', Parking: 'Yup', Wheelchair_Accessible: 'None', Good_For_Kids: 'Yes', Good_For_Groups: 'Yes', Dogs_Allowed: 'Maybe', Attire: 'Yes', Ambience: 'Yes', Noise_Level: 'No', Wifi: 'Nope', Has_TV: 'Yes', Caters: 'None', Gender_Neutral_Restrooms: 'No', Smoking: 'You Wish' }, 
  { rid: 94, Accepts_Apple_Pay: 'Possibly', Good_For: 'Yup', Good_For_Groups: 'None', Dogs_Allowed: 'Yup', Attire: 'Possibly', Ambience: 'Maybe', Noise_Level: 'No', Has_TV: 'Possibly', Caters: 'No', Gender_Neutral_Restrooms: 'Yes', Smoking: '?' }, 
  { rid: 95, Takes_Reservations: 'Yes', TakeZout: 'No', Accepts_Credit_Cards: 'Yup', Parking: 'Yes', Bike_Parking: 'Yes', Good_For_Kids: 'Yup', Good_For_Groups: 'Nope', Noise_Level: 'Nope', Alcohol: 'Yes', Outdoor_Seating: 'Yup', Wifi: 'No', Has_TV: 'Yes', Gender_Neutral_Restrooms: 'Yup', Smoking: 'Maybe' }, 
  { rid: 96, TakeZout: 'Yes', Accepts_Apple_Pay: '?', Good_For: 'None', Parking: 'Possibly', Bike_Parking: 'You Wish', Wheelchair_Accessible: 'Yup', Good_For_Kids: 'No', Dogs_Allowed: 'None', Attire: 'None', Ambience: 'None', Noise_Level: 'You Wish', Alcohol: 'You Wish', Outdoor_Seating: 'Yes', Has_TV: 'Yes', Gender_Neutral_Restrooms: 'Nope', Smoking: 'Maybe' }, 
  { rid: 97, Takes_Reservations: 'No', Accepts_Apple_Pay: 'Yup', Wheelchair_Accessible: 'Nope', Good_For_Kids: 'No', Attire: 'No', Ambience: 'Maybe', Has_TV: 'Yes', Caters: 'Yes' }, 
  { rid: 98, Takes_Reservations: 'Yes', TakeZout: 'No', Accepts_Credit_Cards: 'Maybe', Accepts_Apple_Pay: 'Nope', Good_For: 'No', Parking: '?', Bike_Parking: 'Maybe', Wheelchair_Accessible: 'Yup', Good_For_Kids: 'None', Attire: 'No', Ambience: 'No', Wifi: 'Yes', Has_TV: 'No', Gender_Neutral_Restrooms: 'Maybe', Smoking: 'Yup' }, 
  { rid: 99, Takes_Reservations: 'Yup', TakeZout: 'Yes', Accepts_Credit_Cards: 'Nope', Accepts_Apple_Pay: 'Nope', Good_For: 'Nope', Parking: 'Maybe', Bike_Parking: 'Yes', Wheelchair_Accessible: 'None', Good_For_Groups: 'No', Dogs_Allowed: 'Yup', Ambience: 'No', Noise_Level: 'Yes', Alcohol: 'No', Outdoor_Seating: 'Yes', Has_TV: 'You Wish', Caters: 'Maybe', Gender_Neutral_Restrooms: 'Yup', Smoking: 'Yes' }, 
  { rid: 100, Takes_Reservations: 'No', Accepts_Apple_Pay: 'None', Good_For: 'Yes', Parking: 'None', Bike_Parking: 'No', Good_For_Kids: 'Yes', Good_For_Groups: 'Maybe', Dogs_Allowed: 'Yes', Attire: 'No', Outdoor_Seating: 'Yes', Gender_Neutral_Restrooms: 'None', Smoking: 'No'}
]

module.exports = {
  restaurantData,
  hoursData,
  detailsData,
  miscData
};





// const restGen = (rid=0, results=[]) => {

//   const adjOrNo = Math.floor(Math.random() * 2);

//   const random = (arr) => {
//     return arr[Math.floor(Math.random() * arr.length)];
//   }

//   const starter = ['Lord Voldemort\'s', 'The', 'Deathly', 'Death Eater\'s', 'Tom\'s', 'Riddle\'s', 'Tom Riddle\'s', 'Slytherin', 'Dementor\'s', 'Dark Wizard\'s']

//   const adj = [' Unforgiveable', ' Deadly', ' Deathly', ' Dark']

//   const middle = [' Horcrux ', ' Dark Mark ', ' Elder Wand ', ' Imperius Curse ', ' Killing Curse ', ' Cruciatus Curse ', ' Prophecy ', ' Philosopher\'s Stone ', ' Curse ']

//   const closer = ['of the Dark Arts', 'of Azkaban', 'of Revenge', 'of the Pure Blood', 'that Shall not be Named', 'of the Dark Lord']
  
//   const name = random(starter) + random(adj) + random(middle) + random(closer);    

//   const rest = { name }

//   if (rid < 100) {
//     results.push(rest)
//     rid += 1
//     restGen(rid, results)
//   }
//   return results;
// }




// const hoursGen = (rid=0, results=[]) => {
   
//   const hours = { rid }
//   const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   if (rid < 101) {
//     days.map(day => {
     
//       const timesNum = Math.floor(Math.random() * 2);
//       let hours1 = Math.floor(Math.random() * 8 + 5);
//       let hours2 = (num) => {
//         return num === 0 ? Math.floor(Math.random() * 6 + 7) : Math.floor   (Math.random() * 6)
//       }
//       hours2 = hours2(timesNum);
//       if (hours2 === 0) hours2 = 12;

//       let mins1 = (hour1, hour2) => {
//         return hour1 === hour2 ? Math.floor(Math.random() * 59) : Math.floor    (Math.random() * 60)
//       }
//       mins1 = mins1(hours1, (hours2 + 12));

//       let mins2 = (hour1, hour2, min) => {
//         return hour1 === hour2 && Math.floor(Math.random() * 60) < min ? mins +     (Math.floor(Math.random() * (60 - mins))) : Math.floor(Math.random()  * 60)  ;
//       }

//       mins2 = mins2(hours1, (hours2 + 12), mins1)

//       if (mins2 < 10) {
//         mins2 = '0' + mins2;
//       }

//       if (mins1 < 10) mins1 = '0' + mins1;
//       if (hours1 === 12) {
//         hours1 = hours1.toString() + ':' + mins1 + ' pm - ';
//       } else {
//         hours1 = hours1.toString() + ':' + mins1 + ' am - ';
//       }

      
//       let hours3 = Math.floor(Math.random() * 5 + 4)
//       let hours4 = (hour) => {
//         return Math.floor(Math.random() * 6 + 7) < hour ? hour + Math.floor   (Math.random() * (12 - hour)) : Math.floor(Math.random() * 6 + 7)
//       } 
//       hours4 = hours4(hours3);

//       let mins3 = (hour3, hour4) => {
//         return hour3 === hour4 ? Math.floor(Math.random() * 59) : Math.floor    (Math.random() * 60);
//       }

//       mins3 = mins3(hours3, hours4);

//       let mins4 = (hour3, hour4, min) => {
//         return hour3 === hour4 && Math.floor(Math.random() * 60) < min ? min +    Math.floor(Math.random() * (60 - min)) : Math.floor(Math.random() * 60);
//       }

//       mins4 = mins4(hours3, hours4, mins3);

//       if (mins3 < 10) mins3 = '0' + mins3;
//       if (mins4 < 10) mins4 = '0' + mins4; 

//       let time1 = hours1 + hours2 + ':' + mins2 + ' pm'; 
//       if (timesNum === 0 && hours2 === 12) time1 = time1.slice(0, -2) + 'am'
//       let time2 = hours3.toString() + ':' + mins3 + ' pm - ' + hours4 + ':' +     mins4 + ' pm';
//       if (hours4 > 11) time2 = time2.slice(0,-2) + 'am';
//       if (timesNum === 1) {
//         time1 = time1 + '\n' + time2;
//       }
//      hours[day] = time1
//     })
//     results.push(hours);
//     rid += 1
//     hoursGen(rid, results)
//   }  
//   return results
// }






// const detailsGen = (rid=0, results=[]) => {
//   const price = () => {
//     return Math.floor(Math.random() * 60)
//   }
//   const randomI = (detail) => {
//     return Math.floor(Math.random() * detail.length);
//   }

//   const Today = ''
//   const price1 = price()
//   const price2 = Math.floor(price1 * (Math.random() + 1))
//   const Price_Range = '$' + price1 + '-' + price2
//   const health = ['A', 'B', 'C', 'D', 'E', 'F']

//   const details = {rid, Today, Price_Range, Health_Score: health[randomI(health)]}



//   if (rid < 101) {
//     results.push(details)
//     rid += 1
//     detailsGen(rid, results)
//   }

//   return results;
// }




// const miscGen = (rid = 0, results = []) => {
//   const include = () => {
//     return Math.floor(Math.random() * 5)
//   }

//   const random = (choices) => {
//     return Math.floor(Math.random() * choices.length)
//   }

//   const genAns = ['Yes', 'No', 'Yup', 'Nope', 'Yes', 'No', 'Maybe', 'Yes', 'Maybe', 'No', 'Possibly', 'No', 'Possibly', 'Maybe', 'Yes', 'You Wish', 'Yup', 'Nope', 'Yes', 'No', '?', 'Yes', 'None', 'Yes', 'Yes', 'None', 'None' ];


//   const data = ['Takes_Reservations', 'TakeZout', 'Accepts_Credit_Cards', 'Accepts_Apple_Pay', 'Good_For', 'Parking', 'Bike_Parking', 'Wheelchair_Accessible', 'Good_For_Kids', 'Good_For_Groups', 'Dogs_Allowed', 'Attire', 'Ambience', 'Noise_Level', 'Alcohol', 'Outdoor_Seating', 'Wifi', 'Has_TV', 'Caters', 'Gender_Neutral_Restrooms','Smoking']

//   const misc = {rid}

//   data.map(item => {
//     if (include() < 3 ) {
//       misc[item] = genAns[random(genAns)]
//     }
//   })

//   if (rid < 101) {
//     results.push(misc)
//     rid += 1
//     miscGen(rid, results)
//   }

//   return results
// }