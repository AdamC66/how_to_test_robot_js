const {newRobot, station, isWorkday, prioritizeTasks}  = require("./robot.js");

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
  // arrange
  robot = newRobot(true, true, false)
  // act
  stationReturn = station(robot)
  // assert
  expect(stationReturn).toEqual(1)
});

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
  // arrange
  robot = newRobot(true, false, true)
  // act
  stationReturn = station(robot)
  // assert
  expect(stationReturn).toEqual(2)
});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  robot = newRobot(true, false, false)
  // act
  stationReturn = station(robot)
  // assert
  expect(stationReturn).toEqual(3)
});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {
  robot = newRobot(false, false, false)
  // act
  stationReturn = station(robot)
  // assert
  expect(stationReturn).toEqual(4)
});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  robot = newRobot(false, false, false)
  robot.todos=[]
  // act
  stationReturn = prioritizeTasks(robot)
  // assert
  expect(stationReturn).toEqual(-1)
})

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  robot = newRobot(false, false, false)
  robot.todos.push(4);
  robot.todos.push(2);
  // act
  stationReturn = prioritizeTasks(robot)
  // assert
  expect(stationReturn).toEqual(4)
});

test('test_workday_on_day_off_returns_false', () => {
  robot = newRobot(false, false, false)
  robot.dayOff = 'Tuesday'
  // act
  stationReturn = isWorkday(robot, 'Tuesday')
  // assert
  expect(stationReturn).toEqual(false)
});

test('test_workday_not_day_off_returns_true', () => {
  robot = newRobot(false, false, false)
  robot.dayOff = 'Tuesday'
  // act
  stationReturn = isWorkday(robot, 'Wednesday')
  // assert
  expect(stationReturn).toEqual(true)
});
