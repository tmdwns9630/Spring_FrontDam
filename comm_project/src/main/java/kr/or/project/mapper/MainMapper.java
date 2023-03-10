package kr.or.project.mapper;

import java.util.List;

import kr.or.project.annotation.MariaDbMapper;
import kr.or.project.main.model.DamInfo;
import kr.or.project.main.model.NoticeInfo;
import kr.or.project.main.model.WalInfo;

@MariaDbMapper
public interface MainMapper {
	
	public List<NoticeInfo> selectMainInfo(NoticeInfo noticeInfo) throws Exception;
	public List<DamInfo> selectDam() throws Exception;
	public List<WalInfo> selectWal() throws Exception;
	
}
