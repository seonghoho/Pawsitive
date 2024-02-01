import CommunityList from '@src/components/Community/CommunityList'
import { CommunityListType } from '@src/types/components/CommunityType'
import { useQuery } from '@tanstack/react-query'
import { fetchCommunityList } from '@src/apis/community'
import { CommunityListAtom } from '@src/stores/atoms/community'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'

// const allCategories: CategoryType[] = [
//   {
//     communityCategoryNo: 1,
//     communityCategoryName: '지식쌓개',
//   },
//   {
//     communityCategoryNo: 2,
//     communityCategoryName: '자랑하개',
//   },
//   {
//     communityCategoryNo: 3,
//     communityCategoryName: '영양있개',
//   },
//   {
//     communityCategoryNo: 4,
//     communityCategoryName: '쇼핑하개',
//   },
// ]

const CommunityListContainer: React.FC = () => {
  const { isLoading, data } = useQuery<CommunityListType[]>({
    queryKey: ['communityList'],
    queryFn: () => fetchCommunityList(),
  })
  // const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [CommunityListValue, setCommunityList] = useAtom(CommunityListAtom)

  useEffect(() => {
    if (data) {
      setCommunityList(data)
    }
  }, [data, setCommunityList])
  // const handleCategoryClick = (categoryNo: number) => {
  //   setSelectedCategory(categoryNo)
  // }
  //
  // const handleAllCategoriesClick = () => {
  //   setSelectedCategory(null)
  // }
  //
  // const filteredData: CommunityListType[] = selectedCategory
  //   ? CommunityListValue.filter(
  //       item => item.content.communityCategoryNo === selectedCategory,
  //     )
  //   : CommunityListValue

  return (
    <div>
      {isLoading || !CommunityListValue || CommunityListValue.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* 카테고리 */}
          {/* <c.Category> */}
          {/*  <Button type="button" onClick={handleAllCategoriesClick}> */}
          {/*    전체보기 */}
          {/*  </Button> */}
          {/*  <CategoryButton */}
          {/*    categories={allCategories} */}
          {/*    onCategoryClick={handleCategoryClick} */}
          {/*  /> */}
          {/* </c.Category> */}
          {/* 커뮤니티 리스트 */}
          <CommunityList data={CommunityListValue} />
          {/* <CommunityList data={filteredData} /> */}
        </div>
      )}
    </div>
  )
}

export default CommunityListContainer
