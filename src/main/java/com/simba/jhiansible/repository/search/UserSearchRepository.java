package com.simba.jhiansible.repository.search;

import com.simba.jhiansible.domain.User;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the User entity.
 */
public interface UserSearchRepository extends ElasticsearchRepository<User, Long> {
}
