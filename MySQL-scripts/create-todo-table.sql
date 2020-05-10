
-- Table structure for table 'todos'

drop table if exists todos;
create table todos (
id int not null auto_increment,
isCompleted bool default false,
todo varchar(50) default null,
primary key(id)
)ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- some default values for testing
insert into todos values
(1, true, 'jump'),
(2, false, 'go buy grocery'),
(3, false, 'go to the gym'),
(4, true, 'eat some fruit');

