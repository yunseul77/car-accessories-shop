package com.team9.carshop.repository;

import com.team9.carshop.entity.Member;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
//@RequiredArgsConstructor //final 필드에 한해서 자동으로 Autowired 추가
public interface MemberRepository extends JpaRepository<Member, Long> {
  // JPA 사용을 위한 상속(JpaRepository), 상속을 받으면 메소드 명명법으로 Query를 만들 수 있음

  Member findByLoginId(String LoginId); // LoginId로 member조회
  List<Member> findAll(); // 전체 조회


}
