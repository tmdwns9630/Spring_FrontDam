package kr.or.project.main.service;

import java.util.List;

import kr.or.project.main.model.DamInfo;
import kr.or.project.main.model.NoticeInfo;
import kr.or.project.main.model.WalInfo;

public interface MainService {
	
	public List<NoticeInfo> selectMainInfo(NoticeInfo noticeInfo);
	
	public List<DamInfo> selectDam();
	
	public List<WalInfo> selectWal();
	
}
