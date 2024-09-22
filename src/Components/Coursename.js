import React, { useState , useEffect} from 'react';
import {View,Text,Image,FlatList,StyleSheet,TouchableOpacity,TextInput, Modal} from 'react-native';
import image from '../constants/image';
import {COLORS, SIZES} from '../constants/themes';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar,faChevronRight,faCheck,faTag,faHeart,faArrowLeft,faXmark,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { faSort, faList, faMoneyBill, faClock } from '@fortawesome/free-solid-svg-icons';
import {commonStyles} from '../constants';
import { useLikedCourses } from './LikedCoursesContext';
import { CommonHeader } from './sharedComponents';
import InputTypes from './sharedComponents/InputTypes';

const Coursename = ({limit, isRedirected}) => {
  const navigation = useNavigation();

  const { likedCourses, toggleLike } = useLikedCourses();
  const [searchText, setSearchText] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [filterType, setFilterType] = useState(null);


  const courses = [
    { id: '1', title: 'Power BI for Beginners', rating: 4, learners: '201K Learners', image: image.courseName7, isFree: true, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises', tutorName: 'Raja'},
    { id: '2', title: 'Introduction to MS Excel', rating: 4, learners: '285K Learners', image: image.courseName, isFree: false, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises', tutorName: 'Raja'},
    { id: '3', title: 'PMP Basics', rating: 3.5, learners: '59K Learners', image: image.courseName5, isFree: true, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises', tutorName: 'Raja'},
    { id: '4', title: 'Introduction to SQL', rating: 3, learners: '179K Learners', image: image.courseName6, isFree: true, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises', tutorName: 'Raja'},
    { id: '5', title: 'Python for Beginners', rating: 3, learners: '299K Learners', image: image.courseName1, isFree: true, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises', tutorName: 'Raja'},
    { id: '6', title: 'Introduction to Cryptocurrency', rating: 4, learners: '110K Learners', image: image.courseName, isFree: true, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises', tutorName: 'Raja'},
    { id: '7', title: 'CI/CD for Beginners', rating: 4, learners: '93K Learners', image: image.courseName, isFree: false, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises', tutorName: 'Raja'},
    { id: '8', title: 'UI/UX Basics', rating: 4, learners: '125K Learners', image: image.courseName4, isFree: false, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises', tutorName: 'Raja'},
    { id: '9', title: 'React Native for Beginners', rating: 4, learners: '83K Learners', image: image.courseName, isFree: true, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises', tutorName: 'Raja'},
    { id: '10', title: 'Introduction to Java', rating: 5, learners: '215K Learners', image: image.courseName3, isFree: false, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises', tutorName: 'Raja'},
    { id: '11', title: 'Angular for Beginners', rating: 4, learners: '98K Learners', image: image.courseName2, isFree: true, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises', tutorName: 'Raja'},
    { id: '12', title: 'AWS for Beginners', rating: 4, learners: '165K Learners', image: image.courseName, isFree: false, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises', tutorName: 'Raja'},
    { id: '13', title: 'Social Media Marketing for Beginners', rating: 5, learners: '88K Learners', image: image.courseName, isFree: true, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises', tutorName: 'Raja'},
    { id: '14', title: 'Digital Marketing Essentials', rating: 4, learners: '122K Learners', image: image.courseName, isFree: false, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises', tutorName: 'Raja'},
  ];

  const handleImagePress = (item) => {
    navigation.navigate('Courseview', {
      images: item.image,  // Pass the item image
      title: item.title,   // Pass the item title
      rating: item.rating, // Pass the item rating
      MName: item.tutorName, // Pass the item rating
      amount: item.discount, // Pass the item rating
      preamount: item.actAmount, // Pass the item rating
    });
  };
  

  const filterSort = [
    { id: '1', name: 'Sort by', icon: faSort },
    { id: '2', name: 'Category', icon: faList },
    { id: '3', name: 'Rating', icon: faStar },
    { id: '4', name: 'Price', icon: faMoneyBill },
    { id: '5', name: 'Duration', icon: faClock },
  ];

  const sortByLabels = [
    { label: 'Paid', value: 0 },
    { label: 'Free', value: 1 }
  ];

  const ratingLabels = [
    { label: '5', value: 0 },
    { label: '4', value: 1 },
    { label: '3', value: 2 },
  ];

  const durationLabels = [
    { label: '0-3 Hours', value: 0 },
    { label: '3-6 Hours', value: 1 },
    { label: '6-9 Hours', value: 2 },
    { label: '9+ Hours', value: 3 },
  ];

  const categoriesLabels = [
    { label: 'Data Science & Business Analytics', value: 0,},
    { label: 'Software Development', value: 1,},
    { label: 'Cyber Security', value: 2,},
    { label: 'Project Management', value: 3,},
    { label: 'AI & Machine Learning', value: 4,},
    { label: 'Digital Marketing', value: 5,},
    { label: 'Cloud Computing', value: 6,},
    { label: 'Big Data', value: 7,},
    { label: 'DevOps', value: 8,},
    { label: 'Quality Management', value: 9,},
  ];

  const [selectedId, setSelectedId] = useState(filterSort[3].id);

  const handlePress = (id) => {
    setSelectedId(id);
  };

  const handleCheckBoxChange = (values) => {
    console.log('Selected checkbox values:', values);
  };

  const renderContent = () => {
    switch (selectedId) {
      case '1':
        return <InputTypes radioButton={true} radioButtonLabels={sortByLabels} onValueChange={handleFilterChange}/>;
      case '2':
        return (<>
        <View style={styles.FilterSearchContainer}>
        <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size={18}
                color={COLORS.$black}
              />
        <TextInput style={styles.searchInput} placeholder="Search by category name" />
      </View>
      <View style={styles.FilterSelectActions}>
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{flexDirection: 'row'}} >
        <FontAwesomeIcon size={25} icon={faCheck} />
          <Text style={styles.selectText}>Select All</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity >
        <FontAwesomeIcon size={25} icon={faXmark} />
          <Text style={styles.clearText}>Clear All</Text>
        </TouchableOpacity>
        </View>
      </View>
        <InputTypes checkBox={true} checkBoxLabels={categoriesLabels} onValueCheckBoxChange={handleCheckBoxChange}/>
        </>
        );
      case '3':
        return <InputTypes radioButton={true} radioButtonLabels={ratingLabels}/>;
      case '4':
        return <InputTypes checkBox={true} checkBoxLabels={durationLabels} onValueCheckBoxChange={handleCheckBoxChange}/>;
      case '5':
        return <InputTypes checkBox={true} checkBoxLabels={durationLabels} onValueCheckBoxChange={handleCheckBoxChange}/>;
      default:
        return null;
    }
  };

  const handleFilterChange = (val) => {
    setFilterType(val);
  };

  const handleApply = () => {
    applyFilter(filterType); // Apply the selected filter
    setIsFilterModalVisible(false); // Close the modal
  };

  const applyFilter = (filter) => {
    if (filter === 0) {
      setFilteredCourses(courses.filter(course => !course.isFree));
    } else if (filter === 1) {
      setFilteredCourses(courses.filter(course => course.isFree));
    } else {
      setFilteredCourses(courses);
    }
  };

  useEffect(() => {
    if (searchText === '') {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter(course =>
        course.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  }, [searchText]);

  const viewWishlist = () => {
    const likedCourseView = courses.filter(item => likedCourses[item.id]);
    navigation.navigate('WishlistScreen', { likedCourseView });
  };

  const displayedCourses = limit ? filteredCourses.slice(0, limit) : filteredCourses;

  return (
    <>
      {!isRedirected && (
        <View>
          {isOpenSearch ? (
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setIsOpenSearch(false)} style={styles.backButton}>
                <FontAwesomeIcon icon={faArrowLeft} size={20} color={COLORS.$black} />
              </TouchableOpacity>
              <View style={styles.searchContainer}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="What do you want to learn?"
                  placeholderTextColor="#888"
                  value={searchText}
                  onChangeText={setSearchText}
                  autoFocus
                />
              </View>
            </View>
          ) : (
            <CommonHeader showCourseFilterHeader={true} sectionHeaderTitle={'Course'} onSearchPress={() => setIsOpenSearch(true)} onFilterPress={() => setIsFilterModalVisible(true)} />
          )}

          {/* Filter Modal */}
          <Modal
            visible={isFilterModalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setIsFilterModalVisible(false)}>
            <View style={styles.filterModalContainer}>
              <View style={styles.filterModalContainerInr}>
                <View style={styles.filterModalHeader}>
                  <Text style={[{fontSize: SIZES.sz_19_font}]}>Sort & Filter</Text>
                  <TouchableOpacity onPress={() => setIsFilterModalVisible(false)}>
                    <FontAwesomeIcon size={25} icon={faXmark} />
                  </TouchableOpacity>
                </View>
                <View style={styles.displayModel}>
                  <View>
                  {filterSort.map(item => {
                    const isSelected = selectedId === item.id;
                    return (
                      <View style={{backgroundColor: COLORS.$gray}}>
                        <TouchableOpacity
                          key={item.id}
                          onPress={() => handlePress(item.id)}
                          style={[styles.filterSortView,{
                              backgroundColor: isSelected ? 'white' : 'gray',
                              borderLeftWidth: isSelected ? 5 : 0,
                              borderLeftColor: isSelected ? 'orange': 'transparent',
                            },]}>
                          <FontAwesomeIcon icon={item.icon} size={22} color={isSelected ? COLORS.$blue_shade_1 : 'black'} />
                          <Text style={{fontSize: 15,color: isSelected ? COLORS.$blue_shade_1 : 'black',}}>{item.name}</Text>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                  </View>
                  <View style={{width: '75%',marginTop: 20}}>{renderContent()}</View>
                </View>
                <View style={styles.filterModalFooter}>
                  <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() =>  navigation.navigate('MainTabs', {screen: 'Homescreen'})}>
                    <Text style={styles.buttonText}>RESET</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={handleApply}>
                    <Text style={styles.buttonText}>APPLY</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      )}

      <View style={styles.container}>
        <View style={commonStyles.flexJustifySpace}>
          <Text style={commonStyles.commonHeaderText}>Courses students are learning</Text>
          {limit && (
            <TouchableOpacity onPress={() => navigation.navigate('Coursename')}>
              <View style={styles.seeViewContainer}>
                <Text style={styles.seeAll}>SEE ALL</Text>
                <FontAwesomeIcon icon={faChevronRight} size={15} color="#007BFF"/>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={displayedCourses}
          renderItem={({item}) => (
            <View>
              {isRedirected ? (
                <View style={styles.courseContainer}>
                  <View style={styles.courseInfo}>
                    <Text style={styles.courseTitle}>{item.title}</Text>
                    <View style={styles.courseRating}>
                      <FontAwesomeIcon icon={faStar} size={18} color={COLORS.$yellow}/>
                      <Text style={styles.courseRatingText}>{item.rating}</Text>
                      <Text style={styles.courseLearners}>{item.learners}</Text>
                    </View>
                    <View style={styles.courseViewTypeContainer}>
                      <Text style={styles.courseViewType}>Video Lessons</Text>
                    </View>
                  </View>
                  <View style={styles.imageContainer}>
                  <TouchableOpacity onPress={() => handleImagePress(item)}>
  <Image source={item.image} style={styles.courseImage} />
</TouchableOpacity>

                    <View style={[ styles.tagContainer, item.isFree ? styles.freeTagOdd : styles.paidTagOdd,]}>
                      <Text style={styles.tagText}>{item.isFree ? 'FREE' : 'PAID'}</Text>
                    </View>
                  </View>
                </View>
              ) : (
                <View style={styles.courseContainer}>
                  <View style={styles.imageContainer}>
                  <TouchableOpacity onPress={() => handleImagePress(item)}>
                    <Image source={item.image} style={[styles.courseImage, {height: 160, width: 160}]}/>
                    </TouchableOpacity>
                    <View style={[ styles.tagContainer, item.isFree ? styles.freeTag : styles.paidTag,]}>
                      <Text style={styles.tagText}>{item.isFree ? 'FREE' : 'PAID'}</Text>
                    </View>
                  </View>
                  <View style={[styles.courseInfo,{paddingTop: 10, paddingLeft: 15},]}>
                    <Text style={styles.courseTitle}>{item.title}</Text>
                    <View style={styles.courseRating}>
                      <FontAwesomeIcon icon={faStar} size={18} color={COLORS.$yellow}/>
                      <Text style={styles.courseRatingText}>{item.rating}</Text>
                      <Text style={styles.courseLearners}>{item.learners}</Text>
                    </View>
                    <Text style={[{fontSize: 15, marginTop: 4}]}>{item.test}</Text>
                    <View style={[{flexDirection: 'row', marginTop: 4}]}>
                      <FontAwesomeIcon icon={faTag} size={15} color={COLORS.$yellow} />
                      <Text style={[{color: '#FFD700'}]}>{item.offer}</Text>
                    </View>
                    {!item.isFree && 
                      (<View style={[{flexDirection: 'row', gap: 5, marginTop: 4}]}>
                        <Text style={[{fontSize: 19,color: COLORS.$black,fontWeight: 'bold',},]}>{item.discount}</Text>
                        <Text style={[{fontSize: 19, textDecorationLine: 'line-through'},]}>{item.actAmount}</Text>
                    </View>)}
                  </View>
                  <TouchableOpacity onPress={() => toggleLike(item.id)}>
                    <FontAwesomeIcon icon={faHeart} size={25} color={likedCourses[item.id] ? 'red' : 'black'} style={styles.iconBorder} />
                    <FontAwesomeIcon icon={faHeart} size={18} color={likedCourses[item.id] ? 'red' : 'white'} style={styles.iconFill} />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
        <View>
          {!isRedirected ? (
            <TouchableOpacity
              style={styles.wishlistButton}
              activeOpacity={0.5}
              onPress={viewWishlist}>
              <Text style={styles.buttonText}>View Wishlist</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </>
  );
};

export default Coursename;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  seeAll: {
    color: '#007BFF',
    fontSize: 14,
  },
  courseContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  imageContainer: {
    position: 'relative',
  },
  courseImage: {
    width: 110,
    height: 110,
    borderRadius: 20,
  },
  courseInfo: {
    flex: 1,
    paddingTop: 13,
  },
  courseTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#333',
  },
  courseRating: {
    ...commonStyles.flexAlignCenter,
    marginTop: 4,
  },
  courseRatingText: {
    marginLeft: 4,
    fontSize: 17,
    color: '#555',
  },
  courseLearners: {
    marginLeft: 10,
    fontSize: 16,
    color: '#777',
  },
  freeTag: {
    ...commonStyles.paidorFree,
    backgroundColor: '#4CAF50',
    top: '92%',
    right: 58,
  },
  paidTag: {
    ...commonStyles.paidorFree,
    backgroundColor: '#FFD700',
    top: '92%',
    right: 58,
  },
  freeTagOdd: {
    ...commonStyles.paidorFree,
    backgroundColor: '#4CAF50',
    top: '90%',
    right: 35,
  },
  paidTagOdd: {
    ...commonStyles.paidorFree,
    backgroundColor: '#FFD700',
    top: '90%',
    right: 35,
  },
  freeTagText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  separator: {
    height: 15,
  },
  freeTagContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  courseViewTypeContainer: {
    marginTop: 10,
    width: 100,
    backgroundColor: COLORS.$gray,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  courseViewType: {
    fontSize: 13,
    color: '#777',
  },
  seeViewContainer: {
    ...commonStyles.flexAlignCenter,
    gap: 5,
  },
  iconFill: {
    position: 'absolute',
    left: '14%',
    top: 3,
  },
  wishlistButton: {
    ...commonStyles.flexContentCenter,
    backgroundColor: COLORS.$blue_shade_1,
    borderRadius: 5,
    height: 50,
    marginTop: 20,
  },
  buttonText: {
    color: COLORS.$White,
    fontSize: SIZES.sz_18_font,
  },
  header: {
    ...commonStyles.flexAlignCenter,
    backgroundColor: COLORS.$White,
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 10,
  },
  searchContainer: {
    height: 50,
  },
  searchInput: {
    fontSize: 16,
    color: COLORS.$Black,
  },

  filterModalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  filterModalContainerInr: {
    // height: '60%',
    backgroundColor: COLORS.$White,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
  displayModel: {
    flexDirection: 'row',
    gap: 20,
    width: '100%'
    // justifyContent: 'center'
    // justifyContent: 'space-between',
  },
  filterModalHeader: {
    ...commonStyles.flexContainer,
    paddingHorizontal: 30,
    paddingVertical: SIZES.padding_10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.$black,
  },
  filterModalFooter: {
    ...commonStyles.flexContainer,
    paddingHorizontal: 30,
    paddingVertical: SIZES.padding_10,
  },
  button: {
    backgroundColor: COLORS.$blue_shade_1,
    borderRadius: 5,
    paddingHorizontal: SIZES.padding_30,
    paddingVertical: SIZES.padding_10,
  },
  buttonText: {
    color: COLORS.$White,
    fontSize: SIZES.sz_20_font,
    fontFamily: 'Poppins-SemiBold',
  },
  filterSortView: {
    // flexDirection: 'column',
    paddingVertical: SIZES.padding_15,
    paddingHorizontal: SIZES.padding_10,
    alignItems: 'center',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    gap: 5,
  },
  FilterSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    gap: 15,
  },
  FilterSelectActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  clearText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
