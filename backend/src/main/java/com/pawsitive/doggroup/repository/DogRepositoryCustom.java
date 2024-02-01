package com.pawsitive.doggroup.repository;

import com.pawsitive.doggroup.dto.response.DogDetailRes;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.NoRepositoryBean;

/**
 * @author 이하늬
 * @since 1.0
 */
@NoRepositoryBean
public interface DogRepositoryCustom {
    Optional<DogDetailRes> getDogByDogNo(int dogNo);

    List<DogDetailRes> getRecommendationDogList(int num);

    List<String> getDogImagesByDogNo(int dogNo);

    Page<DogDetailRes> getDogList(Pageable pageable);

    Page<DogDetailRes> getDogListByKindNo(Pageable pageable, String kind);

}
